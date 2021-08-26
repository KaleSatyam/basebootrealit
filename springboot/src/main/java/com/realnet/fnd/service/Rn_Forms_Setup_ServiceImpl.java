package com.realnet.fnd.service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.realnet.exceptions.ResourceNotFoundException;
import com.realnet.fnd.entity.Rn_Forms_Component_Setup;
import com.realnet.fnd.entity.Rn_Forms_Setup;
import com.realnet.fnd.repository.Rn_Forms_Setup_Repository;
import com.realnet.utils.WireFrameConstant;

@Service
public class Rn_Forms_Setup_ServiceImpl implements Rn_Forms_Setup_Service {

	@Value("${angularProjectPath}")
	private String angularProjectPath;

	@Autowired
	private Rn_Forms_Setup_Repository rn_forms_setup_repository;

	@Override
	public List<Rn_Forms_Setup> getAll() {
		return rn_forms_setup_repository.findAll();
	}

	@Override
	public Page<Rn_Forms_Setup> getAll(Pageable page) {
		return rn_forms_setup_repository.findAll(page);
	}

	@Override
	public Rn_Forms_Setup getById(int id) {
		Rn_Forms_Setup rn_forms_setup = rn_forms_setup_repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Rn_Forms_Setup not found :: " + id));
		return rn_forms_setup;
	}

	@Override
	public Rn_Forms_Setup save(Rn_Forms_Setup rn_forms_setup) {
		Rn_Forms_Setup savedRn_Forms_Setup = rn_forms_setup_repository.save(rn_forms_setup);
		return savedRn_Forms_Setup;
	}

	@Override
	public Rn_Forms_Setup updateById(int id, Rn_Forms_Setup rn_forms_setupRequest) {
		Rn_Forms_Setup old_rn_forms_setup = rn_forms_setup_repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Rn_Forms_Setup not found :: " + id));
		old_rn_forms_setup.setButton_caption(rn_forms_setupRequest.getButton_caption());
		old_rn_forms_setup.setForm_desc(rn_forms_setupRequest.getForm_desc());
		old_rn_forms_setup.setForm_name(rn_forms_setupRequest.getForm_name());
		old_rn_forms_setup.setPage_event(rn_forms_setupRequest.getPage_event());
		old_rn_forms_setup.setRelated_to(rn_forms_setupRequest.getRelated_to());
		// line part
		old_rn_forms_setup.setComponents(rn_forms_setupRequest.getComponents());
		// updated by
		old_rn_forms_setup.setUpdatedBy(rn_forms_setupRequest.getUpdatedBy());
		final Rn_Forms_Setup updated_rn_forms_setup = rn_forms_setup_repository.save(old_rn_forms_setup);
		return updated_rn_forms_setup;
	}

	@Override
	public boolean deleteById(int id) {
		Rn_Forms_Setup rn_forms_setup = rn_forms_setup_repository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Rn_Forms_Setup not found :: " + id));
		rn_forms_setup_repository.delete(rn_forms_setup);
		return true;
	}

	@Override
	public List<Rn_Forms_Setup> getByFormId(int form_id) {
		return rn_forms_setup_repository.findByFormId(form_id);
	}

	@Override
	public void buildDynamicForm(int form_id) {

		// HEADER
		Rn_Forms_Setup rn_forms_setup = rn_forms_setup_repository.findById(form_id)
				.orElseThrow(() -> new ResourceNotFoundException("Rn_Forms_Setup not found :: " + form_id));

		// LINE
		List<Rn_Forms_Component_Setup> components = rn_forms_setup.getComponents();
		String form_name = rn_forms_setup.getForm_name();
		String form_name_upper = form_name.toUpperCase();
		String buttonCaption = rn_forms_setup.getButton_caption();

		StringBuilder dynamic_entry_form_html = new StringBuilder();
		StringBuilder dynamic_grid_view_form = new StringBuilder();
		StringBuilder dynamic_read_only_form = new StringBuilder();
		StringBuilder dynamic_edit_form = new StringBuilder();

		// add
		dynamic_entry_form_html.append("<div class=\"entry-pg pad-16\">\r\n" + "  <h4><b>ENTRY FORM</b></h4>\r\n"
				+ "\r\n" + "  <br />\r\n" + " <div class=\"section\">\n" + "    <p> " + form_name_upper + "</p>\n"
				+ "</div>\r\n" + "  <section class=\"form-block\" style=\"margin-top:32px\">\n"
				+ "	<!-- entry form-->\r\n" + "      <form [formGroup]=\"entryForm\" (ngSubmit)=\"onSubmit()\">\r\n"
				+ "          <div class=\"clr-row\">\n" + "        \r\n");

		// edit
		dynamic_edit_form.append("<div class=\"read-only-pg pad-16\">\r\n" + "  <h4>EDIT FORM</h4>\r\n" + "  <br />\r\n"
				+ "  <div class=\"section\">\n" + "				   <p> " + form_name_upper + "</p>\n"
				+ "				</div>\r\n" + "\r\n" + "  <section class=\"form-block\" style=\"margin-top:32px\">\r\n"
				+ "      <form (ngSubmit)=\"onSubmit()\">\r\n" + "         <div class=\"clr-row\">  \n");

		// read-only
		dynamic_read_only_form.append("<table class=\"s-header\">\n");

		int loopCount = 0;
		for (Rn_Forms_Component_Setup component : components) {
			int i = ++loopCount;
			String label = component.getLabel();
			String type = component.getType();
			boolean mandatory = Boolean.parseBoolean(component.getMandatory());
			boolean readonly = Boolean.parseBoolean(component.getReadonly());
			// boolean b1=Boolean.parseBoolean(string);
			String drop_value = component.getDrop_values();

			System.out.println("Label Name::" + label);
			// FOR MODIFICATION REFER : com.realnet.wfb.service:
			// SpringMVCFieldTypeServiceImpl.java
			if (WireFrameConstant.DT_TEXTFIELD.equalsIgnoreCase(type)) {
				// ENTRY FORM (.html)
				dynamic_entry_form_html
						.append("<div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\r\n"
								+ "                  <label>" + label + ": </label>\r\n" + "                  \r\n"
								+ "                      <input class=\"clr-input\"  	 style=\"width:fit-content;\" 	colspan=\"2\" type=\"text\" "
								+ "formControlName=\"comp" + i + "\"  placeholder=\"Enter" + label + "\" >"
								+ "</div>\r\n");

				// UPDATE FORM
				dynamic_edit_form.append("<div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\r\n"
						+ "                  <td>" + label + ": </td>\r\n"
						+ "                  <td colspan=\"2\"><input class=\"clr-input\" type=\"text\" name=\"comp" + i
						+ "\" [(ngModel)]=\"dynamicForm.comp" + i + "\" " + " placeholder=\"Enter" + label
						+ "\" /></td>\r\n" + "              </div>\r\n");

			}

			if (WireFrameConstant.DT_LONGTEXT.equalsIgnoreCase(type)) {
				System.out.println("LONG TEXT i =" + i);
				dynamic_entry_form_html
						.append(" <div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\r\n"
								+ "        <label>" + label + ": </label>\r\n"
								+ "        <textarea		clrTextarea  cols=\"40\" rows=\"4\" 	 formControlName=\"comp"
								+ i + "\"     placeholder=\"Enter" + label + "\"	></textarea>\r\n" + "    </div>\n");

				// UPDATE FORM
				dynamic_edit_form.append("<div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\r\n"
						+ "                  <label>" + label + ": </label>\r\n"
						+ "                  <textarea rows=\"4\" cols=\"40\"  clrTextarea    name=\"comp" + i
						+ "\" [(ngModel)]=\"dynamicForm.comp" + i + "\" " + "  placeholder=\"Enter" + label
						+ "\" 	>  </textarea>\r\n" + "              </div>\r\n");
			}

			if (WireFrameConstant.FIELD_CHECKBOX.equalsIgnoreCase(type)) {
				dynamic_entry_form_html
						.append("<div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ "        <label style=\"width:125px;\">" + label + "</label>\n"
								+ "        <input  type=\"checkbox\" formControlName=\"comp" + i
								+ "\" style=\"width:180px\" [value]=\"selected\"   />\n" + "    </div>");

				// UPDATE FORM
				dynamic_edit_form.append("<div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
						+ "        <td style=\"width:125px;\">" + label + "</td>\n"
						+ "        <td><input  type=\"checkbox\" name=\"comp" + i
						+ "\" style=\"width:180px\" [value]=\"selected\"   [(ngModel)]=\"dynamicForm.comp" + i
						+ "\"  /></td>\n" + "    </div>");

			}

			if (WireFrameConstant.FIELD_DROPDOWN.equalsIgnoreCase(type)) {
				dynamic_entry_form_html
						.append("<div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ "        <label>" + label + "</label>\n"
								+ "        <select style=\" width:150px;\" clrSelect name=\"options\"  style=\"width: 25vh;\" formControlName=\"comp"
								+ i + "\"  >\n"
								+ "<option *ngFor=\"let option of mydata \" value={{option}}>{{option}}</option>\n"
								+ "        </select>\n" + "    </div>");

				// UPDATE FORM
				dynamic_edit_form.append(" <div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
						+ "        <td style=\"width:125px;\">" + label + "</td>\n" + "              <td>\n"
						+ "                <select style=\" width:150px;\" clrSelect name=\"options\"  style=\"width: 25vh;\" name=\"comp"
						+ i + "\"  [(ngModel)]=\"dynamicForm.comp" + i + "\" >\n"
						+ "			<option *ngFor=\"let option of mydata \" value={{option}}>{{option}}</option>\n"
						+ "                </select>\n" + "              </td>\n" + "            </div>");
			}

			if (WireFrameConstant.DT_DATE.equalsIgnoreCase(type)) {
				dynamic_entry_form_html
						.append("<div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ "        <label style=\"width:125px;\">" + label + "</label>\n"
								+ "                <input  class=\"clr-input\" colspan=\"2\" type=\"date\" style=\"width: fit-content;\" \n"
								+ "                  formControlName=\"comp" + i + "\" />\n" + "    </div>");

				// UPDATE FORM
				dynamic_edit_form.append("<div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
						+ "        <td style=\"width:125px;\">" + label + "</td>\n"
						+ "        <td style=\"width:125px;\">dropme </td>\n"
						+ "                <input  class=\"clr-input\" colspan=\"2\" type=\"date\" style=\"width: fit-content;\" \n"
						+ "                  name=\"comp" + i + "\"    [(ngModel)]=\"dynamicForm.comp" + i + "\"  />\n"
						+ "    </div>");

			}

			if (WireFrameConstant.FIELD_TOGGLEBUTTON.equalsIgnoreCase(type)) {
				dynamic_entry_form_html
						.append(" <div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ "        <label >" + label + "</label>\n" + "            \n"
								+ "                <input type=\"checkbox\" clrToggle formControlName=\"comp" + i
								+ "\" style=\"width: fit-content;\" \n" + "                [value]=\"toggle\"   />\n"
								+ "              \n" + "            </div>");

				// UPDATE FORM
				dynamic_edit_form.append(" <div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
						+ "        <td style=\"width:125px;\">" + label + "</td>\n" + "              <td>\n"
						+ "                <input type=\"checkbox\" clrToggle name=\"comp" + i
						+ "\" style=\"width: fit-content;\" \n"
						+ "                [value]=\"toggle\"   (change)=\"togglechange()\"  [(ngModel)]=\"dynamicForm.comp"
						+ i + "\" />\n" + "              </td>\n" + "            </div>");

			}

			if (WireFrameConstant.FIELD_URL.equalsIgnoreCase(type)) {
				dynamic_entry_form_html
						.append(" <div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ "        <label >" + label + "</label>\n" + "              \n"
								+ "                <input type=\"url\"  style=\"width: fit-content;\" autocomplete=\"url\" \n"
								+ "                formControlName=\"comp" + i
								+ "\"  [value]=\"url\" [(ngModel)]=\"url\"  placeholder=\"https://www.facebook.com\"\n"
								+ "                    class=\"clr-input\">\n" + "             \n"
								+ "            </div>");

				// UPDATE FORM
				dynamic_edit_form.append(" <div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
						+ "        <label>" + label + "</label>\n" + "              <td>\n"
						+ "                <input type=\"url\"  name=\"comp" + i + "\" style=\"width: fit-content;\" \n"
						+ "                   [(ngModel)]=\"dynamicForm.comp" + i
						+ "\" 	   class=\"clr-input\"	 placeholder=\"https://www.facebook.com\"	 />\n"
						+ "              </td>\n" + "            </div>");

			}

			if (WireFrameConstant.FIELD_AUTOCOMPLETE.equalsIgnoreCase(type)) {
				dynamic_entry_form_html
						.append("  <div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ "        <label>" + label + "</label>\n" + "             \n"
								+ "               <input type=\"text\" style=\"width: fit-content;\" autocomplete=\"name\"\n"
								+ "                formControlName=\"comp" + i + "\" 		 placeholder=\"Enter  "
								+ label + "\" \n" + "                   class=\"clr-input\">\n" + "             \n"
								+ "           </div>");

				// UPDATE FORM
				dynamic_edit_form.append("<div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
						+ "        <label>" + label + "</label>\n" + "              \n"
						+ "                <input type=\"text\"  name=\"comp" + i
						+ "\" style=\"width: fit-content;\" \n" + "                   [(ngModel)]=\"dynamicForm.comp"
						+ i + "\" 	autocomplete=\"name\"   class=\"clr-input\"	  placeholder=\"Enter" + label
						+ "\"	 />\n" + "              \n" + "            </div>");

			}

			if (WireFrameConstant.DT_PHONEMASKED.equalsIgnoreCase(type)) {
				dynamic_entry_form_html
						.append(" <div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ "        <label>" + label + "</label>\n" + "				\n"

								+ "              <input type=\"tel\" mask=\"(000) 000-0000\" style=\"width: fit-content;\" 		 placeholder=\" (9658746325) \"  	class=\"clr-input\" formControlName=\"comp"
								+ i + "\">\n" + "            </div>");

				// UPDATE FORM
				dynamic_edit_form.append(" <div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
						+ "        <td style=\"width:125px;\">" + label + "</td>\n" + "              <td>\n"
						+ "                <input type=\"text\"  name=\"comp" + i
						+ "\" style=\"width: fit-content;\" \n" + "                   [(ngModel)]=\"dynamicForm.comp"
						+ i + "\" 	autocomplete=\"phone\"    mask=\"(000) 000-0000\"   class=\"clr-input\"	 	 />\n"
						+ "              </td>\n" + "            </div>");

			}

			if (WireFrameConstant.FIELD_EMAIl.equalsIgnoreCase(type)) {
				dynamic_entry_form_html
						.append("<div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ "        <label>" + label + "</label>\n" + "			\n"
								+ "                <input \n" + "                 type=\"email\" \n"
								+ "                 style=\"width: fit-content;\"\n" + "                \n"
								+ "                formControlName=\"comp" + i + "\" \n"
								+ "                placeholder=\"Enter email\"\n"
								+ "                pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\"  	 placeholder=\"Enter"
								+ label + "\"			\n" + "                    class=\"clr-input\">\n"
								+ "              </div>");

				// UPDATE FORM
				dynamic_edit_form.append(" <div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
						+ "        <td style=\"width:125px;\">" + label + "</td>\n" + "              <td>\n"
						+ "                <input type=\"email\"  name=\"comp" + i
						+ "\" style=\"width: fit-content;\" \n" + "                   [(ngModel)]=\"dynamicForm.comp"
						+ i
						+ "\" 	   placeholder=\"Enter email\"   class=\"clr-input\"	pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" 	 />\n"
						+ "              </td>\n" + "            </div>");

			}

			if (WireFrameConstant.FIELD_PASSWORDMASKED.equalsIgnoreCase(type)) {
				dynamic_entry_form_html
						.append("<div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ "        <label>" + label + "</label>\n" + "\n"
								+ " <input type=\"password\" class=\"clr-input\" 	 placeholder=\"Enter" + label
								+ "\"	   formControlName=\"comp" + i + "\" style=\"width: fit-content;\">\n"
								+ "              </div>");

				// UPDATE FORM
				dynamic_edit_form.append(" <div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
						+ "        <td style=\"width:125px;\">" + label + "</td>\n" + "              <td>\n"
						+ "            <input type=\"password\"   name=\"comp" + i
						+ "\" style=\"width: fit-content;\" \n" + "                   [(ngModel)]=\"dynamicForm.comp"
						+ i + "\" 	    placeholder=\"Enter" + label + "\"   class=\"clr-input\"		 />"
						+ "              </td>\n" + "            </div>");

			}

			if (WireFrameConstant.FIELD_CURRENCY.equalsIgnoreCase(type)) {
				dynamic_entry_form_html
						.append("<div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ "        <label>" + label + "</label>\n" + "\n"
								+ "<span style='font-size:25px;'>&#8377;</span> <input type=\"number\" class=\"clr-input\" [value]=\"currency \" [(ngModel)]=\"currency\" 		 placeholder=\"Enter"
								+ label + "\" 	formControlName=\"comp" + i + "\" style=\"width: fit-content;\"/>\n"
								+ "         {{currency |currency:'INR'}}   \n" + "          </div>");

				// UPDATE FORM
				dynamic_edit_form.append(" <div class=\"clr-col-md-6 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
						+ "        <label>" + label + "</label>\n" + "              \n"
						+ "      <span style='font-size:25px;'>&#8377;</span>      <input type=\"number\"   name=\"comp"
						+ i + "\" style=\"width: fit-content;\" \n"
						+ "                   [(ngModel)]=\"dynamicForm.comp" + i + "\" 	    class=\"clr-input\"	"
						+ "		 placeholder=\"Enter" + label + "\"	 />  {{dynamicForm.comp" + i + " |currency:'INR'}} "
						+ "             \n" + "            </div>");

			}

			// GRID VIEW FORM (.ts)
			dynamic_grid_view_form.append("{prop:\"comp" + i + "\"  , name: \"" + label + "\"   , width:120 },\r\n");

			// READ-ONLY FORM
			dynamic_read_only_form.append("<tr>\r\n" + "          <td>" + label + " </td>\r\n"
					+ "          <td> {{ dynamicForm.comp" + i + " }} </td>\r\n" + "      </tr>\r\n");

		} // LOOP END

		// ADD
		dynamic_entry_form_html.append("\n</div>" + "\r\n" + "<br>\r\n"
				+ "          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!entryForm.valid\">SUBMIT</button>\r\n"
				+ "      </form>\r\n" + "  </section>\r\n" + "</div>\r\n");

		// UPDATE
		dynamic_edit_form.append(" </div>\r\n" + "          <br>\r\n"
				+ "          <button type=\"submit\" form-control class=\"btn btn-primary\">UPDATE</button>\r\n"
				+ "      </form>\r\n" + "  </section>\r\n" + "</div>\r\n");

		// READ-ONLY
		dynamic_read_only_form.append("  </table>\r\n");

		FileWriter fw = null;
		BufferedWriter bw = null;
		try {

			// ENTRY FORM
			String ngDynamicEntryFormHtmlPath = angularProjectPath
					+ "/src/app/pages/dynamic-form/add/add-dynamic-form.component.html";
			File ngDynamicEntryFormHtmlFile = new File(ngDynamicEntryFormHtmlPath);
			if (!ngDynamicEntryFormHtmlFile.exists()) {
				ngDynamicEntryFormHtmlFile.createNewFile();
			}
			fw = new FileWriter(ngDynamicEntryFormHtmlFile.getAbsoluteFile());
			bw = new BufferedWriter(fw);
			bw.write(dynamic_entry_form_html.toString());
			bw.close();

			// UPDATE FORM
			String ngDynamicEditFormHtmlPath = angularProjectPath
					+ "/src/app/pages/dynamic-form/edit/edit-dynamic-form.component.html";
			File ngDynamicEditFormHtmlFile = new File(ngDynamicEditFormHtmlPath);
			if (!ngDynamicEditFormHtmlFile.exists()) {
				ngDynamicEditFormHtmlFile.createNewFile();
			}
			fw = new FileWriter(ngDynamicEditFormHtmlFile.getAbsoluteFile());
			bw = new BufferedWriter(fw);
			bw.write(dynamic_edit_form.toString());
			bw.close();

			// GRID VIEW FORM
			final String grid_form_start = "// DYNAMIC FORM GRID START";
			final String grid_form_end = "// DYNAMIC FORM GRID END";
			String grid_form_replaceWith = dynamic_grid_view_form.toString();
			String ngDynamicGridFormTsPath = angularProjectPath
					+ "/src/app/pages/dynamic-form/all/all-dynamic-form.component.ts";
			File ngDynamicGridFormTsFile = new File(ngDynamicGridFormTsPath);
			String grid_fileString = FileUtils.readFileToString(ngDynamicGridFormTsFile, StandardCharsets.UTF_8);
			String grid_finalString = stringReplace(grid_fileString, grid_form_start, grid_form_end,
					grid_form_replaceWith);

			bw = new BufferedWriter(new FileWriter(ngDynamicGridFormTsFile, false)); // replaced string
			bw.write(grid_finalString);
			bw.close();

			// READ-ONLY FORM
			final String read_only_form_start = "<!-- read only form start -->";
			final String read_only_form_end = "<!-- read only form end -->";
			String read_only_form_replaceWith = dynamic_read_only_form.toString();
			String ngDynamicReadOnlyFormHtmlPath = angularProjectPath
					+ "/src/app/pages/dynamic-form/read-only/read-only-dynamic-form.component.html";
			File ngDynamicReadOnlyFormHtmlFile = new File(ngDynamicReadOnlyFormHtmlPath);
			String read_only_fileString = FileUtils.readFileToString(ngDynamicReadOnlyFormHtmlFile,
					StandardCharsets.UTF_8);
			String read_only_finalString = stringReplace(read_only_fileString, read_only_form_start, read_only_form_end,
					read_only_form_replaceWith);

			bw = new BufferedWriter(new FileWriter(ngDynamicReadOnlyFormHtmlFile, false)); // replaced string
			bw.write(read_only_finalString);
			bw.close();

		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Override
	public String stringReplace(String str, String start, String end, String replaceWith) {
		int i = str.indexOf(start);
		while (i != -1) {
			int j = str.indexOf(end, i + 1);
			if (j != -1) {
				String data = str.substring(0, i + start.length()) + "\n" + replaceWith + "\n";
				String temp = str.substring(j);
				data += temp;
				str = data;
				i = str.indexOf(start, i + replaceWith.length() + end.length() + 1);
			} else {
				break;
			}
		}
		return str;
	}

}
