package com.realnet.users.service;

import java.util.List;

import com.realnet.users.entity.User;
import com.realnet.users.entity.UserDto;
import com.realnet.users.entity.UserProfileDTO;

public interface UserService {
	public boolean insertOrSaveUser(User user);

	// company registration
	List<User> getAll();

	void delete(long id);

	// Optional<User> getByUserNameAndPassword(String username, String password);
	User getByUserNameAndPassword(String username, String password);

	User getByUserName(String username);

	User getByEmail(String email);

	User getById(Long id);

	boolean existsByEmail(String email);

	// update by username
	User updateByEmail(String email, UserProfileDTO userProfile);

	// get logged in user details
	String getLoggedInUserEmail();

	Long getLoggedInUserId();
	
	Long getLoggedInUserAccountId();

	User getLoggedInUser();

	User getUserInfoByUserId(Long userId);

	// creating new user (sign up user as ADMIN)
	User userResister(UserDto user);

	// --- USERS ADDED BY ADMIN ---
	User createUserByAdmin(UserDto user);
//	List<User> getUsersByAccountId(Long id);
	//List<User> getUsersByCompanyId(Long id); // need mod
	public User updateById(Long id, User UserRequest);
	boolean deleteById(Long id);
	
	boolean changePassword(String oldPassword, String newPassword);

}
