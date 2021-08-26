package com.realnet.fnd.service;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

import com.realnet.exceptions.ResourceNotFoundException;
import com.realnet.fnd.entity.Rn_Ext_Fields;
import com.realnet.fnd.repository.ExtFieldRepository;
import com.realnet.fnd.repository.Rn_LookUpRepository;
import com.realnet.utils.WireFrameConstant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class ExtFieldServiceImpl implements ExtFieldService {

	@Value("${angularProjectPath}")
	private String angularProjectPath;

	@Autowired
	private ExtFieldRepository extFieldRepository;

	@Autowired
	Rn_LookUpRepository lookUpRepository;

	@Override
	public List<Rn_Ext_Fields> getAll() {
		return extFieldRepository.findAll();
	}

	// @Override
	// public Page<Rn_Ext_Fields> getAll(Pageable page) {
	// return extFieldRepository.findAll(page);
	// }

	@Override
	public Rn_Ext_Fields getById(int id) {
		Rn_Ext_Fields rn_ext_fields = extFieldRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Extension Field not found :: " + id));
		return rn_ext_fields;
	}

	@Override
	public Rn_Ext_Fields save(Rn_Ext_Fields rn_ext_fields) {
		Rn_Ext_Fields savedRn_Ext_Fields = extFieldRepository.save(rn_ext_fields);
		return savedRn_Ext_Fields;
	}

	@Override
	public Rn_Ext_Fields updateById(int id, Rn_Ext_Fields extensionRequest) {
		Rn_Ext_Fields old_ext_field = extFieldRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Extension Field not found :: " + id));

		old_ext_field.setField_name(extensionRequest.getField_name());
		old_ext_field.setMapping(extensionRequest.getMapping());
		old_ext_field.setData_type(extensionRequest.getData_type());
		old_ext_field.setType(extensionRequest.getType());
		old_ext_field.setIsActive(extensionRequest.getIsActive());
		final Rn_Ext_Fields updated_ext_field = extFieldRepository.save(old_ext_field);
		return updated_ext_field;
	}

	@Override
	public boolean deleteById(int id) {
		if (!extFieldRepository.existsById(id)) {
			throw new ResourceNotFoundException("Extension Field not found :: " + id);
		}
		Rn_Ext_Fields rn_ext_fields = extFieldRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Extension Field not found :: " + id));
		extFieldRepository.delete(rn_ext_fields);
		return true;
	}

	// @Override
	// public List<String> getLookupValues() {
	// return lookUpRepository.findLookupValues();
	// }
	//
	// @Override
	// public List<String> getDataTypeValues() {
	// return lookUpRepository.findDataTypeValues();
	// }

	@Override
	public void buildExtensionByFormCode(String acc_id, String f_code) {
		List<Rn_Ext_Fields> extensions = extFieldRepository.getExtensionFieldByFormCode(acc_id, f_code);

		if (extensions == null || extensions.isEmpty()) {
			throw new ResourceNotFoundException("Extension Fields Not Found");
		}
		StringBuilder extension_grid_form = new StringBuilder();
		StringBuilder extension_entry_form = new StringBuilder();
		StringBuilder extension_edit_form = new StringBuilder();
		StringBuilder extension_readonly_form = new StringBuilder();

		//entry
		extension_entry_form.append("<div class=\"clr-row\" [formGroup]=\"extensionForm\">\n");

		//update
		extension_edit_form.append("<div class=\"clr-row\" >\n");


			// read-only
			extension_readonly_form.append("<table class=\"s-header\">\n");

		for (Rn_Ext_Fields extension : extensions) {
			// String form_code = extension.getForm_code();
			String type = extension.getType(); // ho, hl
			String data_type = extension.getData_type();
			String mapping = extension.getMapping();
			String field_name = extension.getField_name();

			if (WireFrameConstant.DT_TEXTFIELD.equals(data_type)) {
				extension_entry_form
						.append("\n  <div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\r\n"
								+ "\n <div> <label >" + field_name + " </label></div>\r\n"
								+ " \n   <input colspan=\"2\" style=\"width:180px\" type=\"text\" class=\"clr-input\" formControlName=\""
								+ mapping + "\" placeholder=\"Enter " + field_name + "\">\r\n" + "    </div>\n");

				//update 
				extension_edit_form
				.append(" \n <div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\r\n"
						+ "\n <div> <label >" + field_name + " </label></div>\r\n"
						+ "  \n <input type=\"text\" class=\"clr-input\" name=\""+ mapping + "\" [(ngModel)]=\"teacherExtension."+ mapping + " \"  >\r\n"
						 + "  \n  </div>\n");

			}

			if (WireFrameConstant.DT_DATE.equals(data_type)) {
				extension_entry_form
						.append("\n <div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\r\n"
								+ "  \n     <div>  <label>" + field_name + " </label></div>\r\n"
								+ "  \n      <input colspan=\"2\" style=\"width:180px\" type=\"date\" class=\"clr-input\" formControlName=\""
								+ mapping + "\" placeholder=\"Enter " + field_name + "\">\r\n" + "    </div>\n");

								//update 
				extension_edit_form
				.append(" \n <div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\r\n"
						+ "\n <div> <label >" + field_name + " </label></div>\r\n"
						+ " \n  <input type=\"date\" name=\""+ mapping + "\" class=\"clr-input\" [(ngModel)]=\"teacherExtension."+ mapping + "\">\r\n"
						 + " \n   </div>\n");
			}

			if (WireFrameConstant.DT_LONGTEXT.equals(data_type)) {
				extension_entry_form
						.append("\n <div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\r\n"
								+ " \n    <div>    <label>" + field_name + " </label></div>\r\n"
								+ " \n       <textarea rows=\"4\" cols=\"50\" class=\"clr-textarea\" colspan=\"2\" style=\"width:ft-content;\" formControlName=\""
								+ mapping + "\"></textarea>\r\n" + "    </div>\n");

								//update 
				extension_edit_form
				.append(" \n <div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\r\n"
						+ "\n <div> <label >" + field_name + " </label></div>\r\n"
						+ "\n <textarea rows=\"4\" cols=\"50\"  class=\"clr-textarea\" colspan=\"2\" style=\"width:ft-content;\" name=\""+ mapping + "\" [(ngModel)]=\"teacherExtension."+ mapping + "\"></textarea> \r\n"
						 + " \n   </div>\n");
			}

			if (WireFrameConstant.FIELD_CHECKBOX.equals(data_type)) {
				extension_entry_form
						.append("\n<div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\r\n"
								+ " \n      <div>  <label>" + field_name + " </label></div>\r\n"
								+ " \n       <input colspan=\"2\" style=\"width:180px\" type=\"checkbox\" formControlName=\""
								+ mapping + "\">\r\n" + "    </div>\n");
			
				// //update 
				extension_edit_form
				.append(" \n <div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\r\n"
						+ "\n <div> <label >" + field_name + " </label></div>\r\n"
						+ "\n <input colspan=\"2\" style=\"width:180px\" type=\"checkbox\"  name=\""+ mapping + "\" [(ngModel)]=\"teacherExtension."+ mapping + "\" > \r\n"
						 + " \n   </div>\n");
			
							}

				

			
			if (WireFrameConstant.FIELD_AUTOCOMPLETE.equals(data_type)) {
				extension_entry_form
						.append("\n <div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\r\n"
								+ " \n     <div>   <label>" + field_name + " </label></div>\r\n"
								+ " \n       <input  class=\"clr-input\" style=\"width:180px\" type=\"text\" formControlName=\""
								+ mapping + "\" autocomplete=\"on\">\r\n" + "    </div>\n");

								//update 
		extension_edit_form
				.append(" \n <div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\r\n"
						+ "\n  <div><label >" + field_name + " </label></div>\r\n"
						+ "\n <input  class=\"clr-input\" style=\"width:180px\" type=\"text\"  name=\""+ mapping + "\" [(ngModel)]=\"teacherExtension."+ mapping + "\" autocomplete=\"on\"> \r\n"
						 + " \n   </div>\n");
			}

			if (WireFrameConstant.FIELD_TOGGLEBUTTON.equals(data_type)) {
				extension_entry_form
						.append(" \n<div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ " \n      <div>  <label>" + field_name + "</label></div>\n" + "              \n"
								+ "  \n              <input type=\"checkbox\" clrToggle formControlName=\"" + mapping +"\"  \n" + " />\n" 
								+ "  \n          </div>\n");


								extension_edit_form
						.append(" \n<div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ " \n      <div>  <label>" + field_name + "</label></div>\n" + "              \n"
								+ " \n               <input type=\"checkbox\" clrToggle    name=\""+ mapping + "\" [(ngModel)]=\"teacherExtension."+ mapping + "\" />\n" 
								+ " \n           </div> <br>\n");
			}

			if (WireFrameConstant.FIELD_URL.equals(data_type)) {
				extension_entry_form
						.append(" \n<div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ "\n        <div> <label>" + field_name + "</label> </div>\n" + "              \n"
								+ " \n               <input type=\"url\"  style=\"width: fit-content;\" autocomplete=\"url\" \n"
								+ "\n                formControlName=\"" + mapping + "\"   placeholder=\"Enter   "
								+ field_name + "\"\n" + "                    class=\"clr-input\">\n"
								+ "              \n" + "            </div>\n");

								extension_edit_form
						.append("\n <div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ "\n       <div>  <label>" + field_name + "</label> </div>\n" + "              \n"
								+ "\n                <input type=\"url\"  style=\"width: fit-content;\" autocomplete=\"url\" \n"
								+ "\n                name=\""+ mapping + "\" [(ngModel)]=\"teacherExtension."+ mapping + "\"   placeholder=\"Enter   "
								+ field_name + "\"\n" + "                    class=\"clr-input\">\n"
								+ "              \n" + "            </div> <br>\n");

			}

			if (WireFrameConstant.FIELD_EMAIl.equals(data_type)) {
				extension_entry_form
						.append("\n<div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ " \n       <div> <label>" + field_name + "</label> </div>\n" + "					\n"
								+ " \n               <input \n" + "                 type=\"email\" \n"
								+ " \n                style=\"width: fit-content;\"\n" + "                \n"
								+ " \n               formControlName=\"" + mapping + "\" \n"
								+ " \n               placeholder=\"Enter email\"\n"
								+ " \n               pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\"  	 placeholder=\"Enter   "
								+ field_name + "\"			\n" + "                    class=\"clr-input\">\n"
								+ "  \n            </div>\n");


								extension_edit_form
						.append("\n<div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ "\n        <div> <label>" + field_name + "</label> </div>\n" + "					\n"
								+ "\n                <input \n" + "                 type=\"email\" \n"
								+ "\n                 style=\"width: fit-content;\"\n" + "                \n"
								+ "\n               name=\""+ mapping + "\" [(ngModel)]=\"teacherExtension."+ mapping +"\" \n"
								+ " \n               placeholder=\"Enter email\"\n"
								+ "  \n              pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\"  	 placeholder=\"Enter   "
								+ field_name + "\"			\n" + "                    class=\"clr-input\">\n"
								+ " \n             </div><br>\n");

			}

			if (WireFrameConstant.FIELD_PASSWORDMASKED.equals(data_type)) {
				extension_entry_form
						.append("\n<div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ " \n      <div>  <label>" + field_name + "</label> </div>\n" + "\n"
								+ " \n<input type=\"password\" class=\"clr-input\" 	 placeholder=\"Enter" + field_name
								+ "\n\"	   formControlName=\"" + mapping + "\" style=\"width: fit-content;\">\n"
								+ "\n              </div>\n");



								extension_edit_form
						.append("\n<div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ "\n        <div> <label>" + field_name + "</label> </div>\n" + "\n"
								+ "\n <input type=\"password\" class=\"clr-input\" 	 placeholder=\"Enter" + field_name
								+ "\n\"	  name=\""+ mapping + "\" [(ngModel)]=\"teacherExtension."+ mapping + "\" style=\"width: fit-content;\">\n"
								+ "\n              </div><br>\n");


			}

			if (WireFrameConstant.FIELD_CURRENCY.equals(data_type)) {
				extension_entry_form
						.append("\n<div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ "\n        <div> <label>" + field_name + "</label> </div>\n" + "\n"
								+ "\n<span style='font-size:25px;'>&#8377;</span> <input type=\"number\" class=\"clr-input\" [value]=\"currency \" [(ngModel)]=\"currency\" 		 placeholder=\"Enter  "
								+ field_name + "\" 	formControlName=\"" + mapping + "\" style=\"width: fit-content;\"/>\n" + "         {{currency |currency:'INR'}}   \n"
								+ "\n          </div>\n\n");



								extension_edit_form
						.append("\n<div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ " \n     <div>   <label>" + field_name + "</label> </div>\n" + "\n"
								+"\n <span style='font-size:25px;'>&#8377;</span> <input type=\"number\" class=\"clr-input\" [value]=\"currency \" [(ngModel)]=\"currency\" 		 placeholder=\"Enter  "
								+ field_name + "\" 	name=\""+ mapping + "\" [(ngModel)]=\"teacherExtension."+ mapping + "\" style=\"width: fit-content;\"/>\n" + "         {{currency |currency:'INR'}}   \n"
								+ "\n          </div><br>\n\n");

			}

			if (WireFrameConstant.DT_PHONEMASKED.equals(data_type)) {
				extension_entry_form
						.append("\n <div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ " \n      <div>  <label>" + field_name + "</label> </div>\n" + "\n"

								+ " \n             <input type=\"tel\" mask=\"(000) 000-0000\" style=\"width: fit-content;\" 	"
								+"\n	 placeholder=\" (9658746325) \"  	class=\"clr-input\" formControlName=\""+ mapping + "\">"
								+"\n" + "            </div>\n");



								extension_edit_form
						.append("\n <div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">\n"
								+ " \n       <div> <label>" + field_name + "</label> </div>\n" + "\n"

								+ "\n              <input type=\"tel\" mask=\"(000) 000-0000\" style=\"width: fit-content;\" 	"
								+"\n	 placeholder=\" (9658746325) \"  	class=\"clr-input\" name=\""+ mapping + "\" [(ngModel)]=\"teacherExtension."+ mapping + "\">"
								+"\n" + "   </div><br>\n");


			}


			if (WireFrameConstant.FIELD_DROPDOWN.equals(data_type)) {
				extension_entry_form
						.append("\n<div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">"
					+"\n	 <div><label for=\"description\">"+field_name+"</label> </div>"
					+"\n<select   id=\"select\" class=\"clr-dropdown\"   formControlName=\"" + mapping + "\" >"
					+"\n	<option  value=\"null\">Choose ...</option>"
					+"\n	<option value=\"medicine\">medicine</option>"
					+"	\n<option value=\"herbals\">herbals</option>"
					+"	\n<option value=\"beauty\">beauty</option>"
					 +" \n</select>"
					+"\n</div>");

					

								extension_edit_form
						.append("\n<div class=\"clr-col-md-4 clr-col-sm-12\" style=\"margin-bottom: 20px;\">"
						+"\n	 <div><label for=\"description\">"+field_name+"</label> </div>"
						+"\n<select id=\"select\" class=\"clr-dropdown\"    name=\""+ mapping + "\" [(ngModel)]=\"teacherExtension."+ mapping + "\" >"
						+"\n	<option  value=\"null\">Choose ...</option>"
						+"\n	<option value=\"medicine\">medicine</option>"
						+"\n	<option value=\"herbals\">herbals</option>"
						+"\n	<option value=\"beauty\">beauty</option>"
						 +"\n </select>"
						+"\n</div>");


						

			}

			// extension grid-view code
			extension_grid_form.append("{prop: \"" + mapping + "\", name: \"" + field_name + "\", width: 200},\n");

			// extension read-only code
			// READ-ONLY FORM
			extension_readonly_form.append("<tr>\r\n" + "          <td>" + field_name + " </td>\r\n"
					+ "          <td> {{ teacherExtension."+ mapping + " }} </td>\r\n" + "      </tr>\r\n");
		

		}



		// extension_code.append("\n</div>\n</table>");
		extension_entry_form.append("\n</div>");

		//update
		extension_edit_form.append("\n</div>");

		// READ-ONLY
		extension_readonly_form.append("  </table>\r\n");

		FileWriter fw = null;
		BufferedWriter bw = null;
		try {

			// ENTRY FORM
			String ngExtEntryPath = angularProjectPath
					+ "/src/app/pages/university/teacher/extensions/add-ext/teacher-add-extension.component.html";
			File ngExtEntryFile = new File(ngExtEntryPath);
			if (!ngExtEntryFile.exists()) {
				ngExtEntryFile.createNewFile();
			}
			fw = new FileWriter(ngExtEntryFile.getAbsoluteFile());
			bw = new BufferedWriter(fw);
			bw.write(extension_entry_form.toString());
			bw.close();

			// UPDATE FORM
			String ngExtEditPath = angularProjectPath
					+ "/src/app/pages/university/teacher/extensions/edit-ext/teacher-edit-extension.component.html";
			File ngExtEditFile = new File(ngExtEditPath);
			if (!ngExtEditFile.exists()) {
				ngExtEditFile.createNewFile();
			}
			fw = new FileWriter(ngExtEditFile.getAbsoluteFile());
			bw = new BufferedWriter(fw);
			bw.write(extension_edit_form.toString());
			bw.close();

			//read only
			
			// READ-ONLY FORM
			String ngExtreadonlyPath = angularProjectPath
			+ "/src/app/pages/university/teacher/extensions/readonly-ext/teacher-readonly-extension.component.html";
			File ngExtreadonlyFile = new File(ngExtreadonlyPath);
			if (!ngExtreadonlyFile.exists()) {
			ngExtreadonlyFile.createNewFile();
			}
			fw = new FileWriter(ngExtreadonlyFile.getAbsoluteFile());
			bw = new BufferedWriter(fw);
			bw.write(extension_readonly_form.toString());
			bw.close();

			// GRID VIEW FORM
			// final String start = "// EXTENSION COLUMN START";
			// final String end = "// EXTENSION COLUMN END";
			// String replaceWith = extension_grid_form.toString();
			// String ngExtGridPath = angularProjectPath
			// + "/src/app/pages/university/teacher/all/all-teacher.component.ts";
			// File ngExtGridFile = new File(ngExtGridPath);
			// String fileString = FileUtils.readFileToString(ngExtGridFile,
			// StandardCharsets.UTF_8);
			// String finalString = stringReplace(fileString, start, end, replaceWith);
			//
			// bw = new BufferedWriter(new FileWriter(ngExtGridFile, false)); // replaced
			// string
			// bw.write(finalString);
			// bw.close();

			// UPDATE FORM

			// READ-ONLY FORM

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
				/*
				 * @Include starting and ending string String data = str.substring(0, i +
				 * start.length()) + "\n" + replaceWith + "\n"; String temp = str.substring(j);
				 * 
				 * @Not Include starting and ending string String data = str.substring(0, i) +
				 * "\n" + replaceWith + "\n"; String temp = str.substring(j + end.length());
				 */
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
