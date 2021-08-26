package com.realnet.session.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.realnet.config.EmailService;
import com.realnet.config.TokenProvider;
import com.realnet.fnd.response.OperationResponse;
import com.realnet.fnd.response.OperationResponse.ResponseStatusEnum;
import com.realnet.session.entity.SessionItem;
import com.realnet.session.response.SessionResponse;
import com.realnet.users.entity.CompanyDto;
import com.realnet.users.entity.EmailRequest;
import com.realnet.users.entity.LoginUser;
import com.realnet.users.entity.Sys_Accounts;
import com.realnet.users.entity.User;
import com.realnet.users.entity.UserDto;
import com.realnet.users.response.UserItem;
import com.realnet.users.response.UserResponse;
import com.realnet.users.service.CompanyService;
import com.realnet.users.service.UserService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.extern.slf4j.Slf4j;

/*
This is a dummy rest controller, for the purpose of documentation (/session) path is map to a filter
 - This will only be invoked if security is disabled
 - If Security is enabled then SessionFilter.java is invoked
 - Enabling and Disabling Security is done at config/applicaton.properties 'security.ignored=/**'
*/
@Slf4j
@Api(tags = { "Authentication" })
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping(value = "/token", produces = MediaType.APPLICATION_JSON_VALUE)
public class SessionController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private TokenProvider jwtTokenUtil;

	@Autowired
	private UserService userService;

	@Autowired
	private CompanyService companyService;

	@Autowired
	private EmailService emailService;

	@ApiResponses(value = {
			@ApiResponse(code = 200, message = "Will return a security token, which must be passed in every request", response = SessionResponse.class) })
	@RequestMapping(value = "/session", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public SessionResponse newSession(@RequestBody LoginUser loginRequest) {

//		User userRequest = userService.getByUserNameAndPassword(loginRequest.getUsername(), loginRequest.getPassword());
//		System.out.println("USER REQUEST -> " + userRequest);
//		log.info("user req : {}", userRequest);

		try {

			final Authentication authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

			SecurityContextHolder.getContext().setAuthentication(authentication);

			final String token = jwtTokenUtil.generateToken(authentication);

			System.out.println("authentication.getName() =>" + authentication.getName()); // email

//        CustomUserDetails user = (CustomUserDetails) authentication.getPrincipal();
//        System.out.println("authentication.getPrincipal() in CustomUserDetails =>" + user); // current user object

			User loggedInUser = userService.getLoggedInUser();
			//System.out.println("/session logged in user -> " + loggedInUser);

//			List<String> loggedInUserRoles = new ArrayList<String>();
			StringBuilder roleString = new StringBuilder();
			loggedInUser.getRoles().forEach(role -> {
//				loggedInUserRoles.add(role.getName());
				roleString.append(role.getName() + ", ");
			});
			String role = roleString.toString().substring(0, roleString.toString().lastIndexOf(","));
			List<String> roleList = Arrays.asList(role.split("\\s*,\\s*"));

//			System.out.println("Nil Logged in user role = " + role);
//			log.info("logged in user roles = {}", loggedInUserRoles);

//			List<String> roles = jwtTokenUtil.getRolesFromToken(token);

			SessionResponse resp = new SessionResponse();
			SessionItem sessionItem = new SessionItem();
			sessionItem.setToken(token);
			sessionItem.setUserId(loggedInUser.getUserId());
			sessionItem.setFullname(loggedInUser.getFullName());
			sessionItem.setFirstName(loggedInUser.getFirstName());
			//sessionItem.setUsername(loggedInUser.getUsername());
			sessionItem.setEmail(loggedInUser.getEmail());
			// sessionItem.setRoles(roleList);
			sessionItem.setRoles(role);
			resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
			resp.setOperationMessage("Login Success");
			resp.setItem(sessionItem);
			return resp;
		} catch (Exception e) {
			System.out.print(e.getMessage());
			SessionResponse resp = new SessionResponse();
			resp.setOperationStatus(ResponseStatusEnum.ERROR);
			resp.setOperationMessage("Login Failed");
			return resp;
		}

	}

	@ApiResponses(value = { @ApiResponse(code = 200, message = "email varification") })
	@RequestMapping(value = "/email-exists", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> emailExistCheck(@RequestBody EmailRequest emailReq) {
		boolean exists = userService.existsByEmail(emailReq.getEmail());

		System.out.println(emailReq.getEmail() + " ::: EMAIL exists? " + exists);
		Map<String, String> res = new HashMap<String, String>();
		if (exists) {
			String message = emailReq.getEmail() + " is Already Exists";
			res.put("message", message);
			// return new ResponseEntity<Error>(HttpStatus.BAD_REQUEST);
			return new ResponseEntity<>(res, HttpStatus.CONFLICT);
		} else {
			String message = "Congratulations " + emailReq.getEmail();
			res.put("message", message);
			// return new ResponseEntity<SUCCESSFUL>(HttpStatus.OK);
			return ResponseEntity.ok(res);
		}
	}

	// admin
	@ApiOperation(value = "Add new user (admin)", response = OperationResponse.class)
	@RequestMapping(value = "/user-registration", method = RequestMethod.POST, produces = { "application/json" })
	public UserResponse addNewUser(@RequestBody UserDto user, HttpServletRequest req) {
		System.out.println("----------This is my comment---------");
		User userAddSuccess = userService.userResister(user);
		System.out.println("----------This is my comment---------");
		UserResponse resp = new UserResponse();
		UserItem userItem = new UserItem();
		if (userAddSuccess != null) {
			userItem.setUserId(userAddSuccess.getUserId());
			userItem.setFirstName(userAddSuccess.getFirstName());
			userItem.setFullname(userAddSuccess.getFullName());
			userItem.setEmail(userAddSuccess.getEmail());
			resp.setOperationStatus(ResponseStatusEnum.SUCCESS);
			resp.setOperationMessage("User Added");
			resp.setItem(userItem);
			return resp;
		} else {
			resp.setOperationStatus(ResponseStatusEnum.ERROR);
			resp.setOperationMessage("Unable to add user");
			return resp;
		}
	}

	@ApiOperation(value = "Add new Company", response = OperationResponse.class)
	@RequestMapping(value = "/company-registration", method = RequestMethod.POST, produces = { "application/json" })
	public ResponseEntity<?> addNewCompany(@RequestBody CompanyDto company) {
		Sys_Accounts companyAddSuccess = companyService.companyResister(company);

		Map<String, String> res = new HashMap<String, String>();
		if (companyAddSuccess != null) {
			String message = "Company Added";
			res.put("message", message);
			return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
		} else {
			String message = "Unable to add Company";
			res.put("message", message);
			// return ResponseEntity.ok(res);
			return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
		}
	}

// ===============================================================
//	  @PostMapping(value = "/forgot-password")
//	    public ResponseEntity<ServiceResponse> forgotPassword(@Valid @RequestBody ForgotPasswordDto forgotPasswordDto) {
//	        User user = userService.findByEmail(forgotPasswordDto.getEmail());
//	        HashMap<String, String> result = new HashMap<>();
//
//	if(user==null)
//	{
//		result.put("message", "No user found with this email!");
//
//		return ResponseEntity.badRequest().body(new ServiceResponse(HttpStatus.BAD_REQUEST.value(), result));
//	}
//
//	eventPublisher.publishEvent(new OnResetPasswordEvent(user));
//
//	result.put("message","A password reset link has been sent to your email box!");
//
//	return ResponseEntity.ok(new ServiceResponse(HttpStatus.OK.value(),result));
//}
//
//@ApiOperation(value = "Change the user password through a reset token", response = ServiceResponse.class)
//@ApiResponses(value = {
//        @ApiResponse(code = 200, message = "The action completed successfully!"), // response = SuccessResponse.class),
//        @ApiResponse(code = 400, message = "The token is invalid or has expired"),//, response = BadRequestResponse.class),
//        @ApiResponse(code = 422, message = Constants.INVALID_DATA_MESSAGE)//, response = InvalidDataResponse.class),
//})
//@PostMapping(value = "/reset-password")
//public ResponseEntity<ServiceResponse> resetPassword(@Valid @RequestBody ResetPasswordDto passwordResetDto) {
//    ResetPassword resetPassword = resetPasswordService.findByToken(passwordResetDto.getToken());
//    HashMap<String, String> result = new HashMap<>();
//
//    if (resetPassword == null) {
//        result.put("message", "The token is invalid!");
//
//        return ResponseEntity.badRequest().body(new ServiceResponse(HttpStatus.BAD_REQUEST.value(), result));
//    }
//
//    if (resetPassword.getExpireAt() < new Date().getTime()) {
//        result.put("message", "You token has been expired!");
//
//        resetPasswordService.delete(resetPassword.getId());
//
//        return ResponseEntity.badRequest().body(new ServiceResponse(HttpStatus.BAD_REQUEST.value(), result));
//    }
//
//    userService.updatePassword(resetPassword.getUser().getId(), passwordResetDto.getPassword());
//
//    result.put("message", "Your password has been resetted successfully!");
//
//    // Avoid the user or malicious person to reuse the link to change the password
//    resetPasswordService.delete(resetPassword.getId());
//
//    return ResponseEntity.badRequest().body(new ServiceResponse(HttpStatus.OK.value(), result));
//}
//}
}
