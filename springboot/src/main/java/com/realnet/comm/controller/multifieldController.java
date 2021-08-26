package com.realnet.comm.controller;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.annotation.MultipartConfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.realnet.comm.entity.MultifieldForm;
import com.realnet.comm.service.multifieldservice;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("api")
@Api(tags = { "multifield" })
public class multifieldController {

//	@Autowired
//	private multifieldservice multiservice;
	
//	@ApiOperation(value = "Get a sales", response = MultifieldForm.class)
//	@PostMapping(path = "/addfield",consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<?> postdata(
//			@RequestHeader(value = HttpHeaders.AUTHORIZATION, required = false) String authToken,
//			@RequestParam("uploadfile") MultipartFile file
//			,@RequestBody MultifieldForm multifield`
//			)
//	{
//		
//		String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\."+ 
//                "[a-zA-Z0-9_+&*-]+)*@" + 
//                "(?:[a-zA-Z0-9-]+\\.)+[a-z" + 
//                "A-Z]{2,7}$"; 
//		 Pattern pat = Pattern.compile(emailRegex);
//		  Matcher matcher = pat.matcher(multifield.getEmail()); 
//		  if(!matcher.matches())
//		  {
//			  return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Email is not valid");
//		  }
//		  
//		  // -------------------------------------------
//		  String regex = "(0/91)?[7-9][0-9]{9}";
//		 Pattern pat2 = Pattern.compile(regex);
//		  Matcher matcher2 = pat2.matcher(multifield.getContact()); 
//		  
//		   if(!matcher2.matches())
//		   {
//			   return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("phone no not valid");
//		   }
//		   //-----------------------------------------------
//		   
//		   System.out.println(file.getOriginalFilename());
//		  
//		return ResponseEntity.ok(file.getName());
//	}
	
//	
	
	@PostMapping("uploadfile")
	public ResponseEntity<String> uploadFileGb(@RequestParam("file") MultipartFile file){
		
		return ResponseEntity.ok(file.getOriginalFilename());
	}
	
}
