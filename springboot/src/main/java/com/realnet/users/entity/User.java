package com.realnet.users.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.realnet.fnd.entity.Rn_Who_Columns;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString(exclude = "sys_account")
@EqualsAndHashCode(callSuper = false)
@Entity
public class User extends Rn_Who_Columns { // implements Comparable<User>
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "user_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long userId;

	private String firstName;

	private String lastName;

	private String fullName;

	@Column(unique = true)
	private String email;

	@Column(unique = true)
	private String username;

	@JsonIgnore
	@Column(name = "password")
	private String password;

	// added = 7.12.20
	@Column(name = "menu_group_id")
	private int menu_group_id;
	
	@Column(name = "status")
	private String status; // for invitation
	
	@Column(name = "department")
	private String department;

	@Column(name = "about")
	private String about;
	@Column(name = "photos")
	private String photos;

	private String role;

	// private String company;

	@JsonIgnore
	private int securityProviderId;

	@JsonIgnore
	private int defaultCustomerId;

	@JsonIgnore
	private String phone;

	@JsonIgnore
	private String address1;

	@JsonIgnore
	private String address2;
	@JsonIgnore
	private String country;

	@JsonIgnore
	private String postal;

	@JsonIgnore
	@Column(name = "isActive")
	private boolean enabled;
	@JsonIgnore
	private boolean isBlocked;
	@JsonIgnore
	private String secretQuestion;
	@JsonIgnore
	private String secretAnswer;
	@JsonIgnore
	private boolean enableBetaTesting;
	@JsonIgnore
	private boolean enableRenewal;

//	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
//	@JoinTable(name = "USER_ROLES", joinColumns = { @JoinColumn(name = "USER_ID") }, inverseJoinColumns = {
//			@JoinColumn(name = "ROLE_ID") })
//	private Set<Role> roles;

//	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
//	@JoinTable(name = "USER_ROLES", joinColumns = { @JoinColumn(name = "USER_ID") }, inverseJoinColumns = {
//			@JoinColumn(name = "ROLE_ID") })
//	private Set<Role> roles = new HashSet<>();
//
//	public void addRole(Role role) {
//		roles.add(role);
//		role.getUsers().add(this);
//	}
//
//	public void removeRole(Role role) {
//		roles.remove(role);
//		role.getUsers().remove(this);
//	}

	@JsonManagedReference
	@ManyToMany(targetEntity = Role.class, fetch = FetchType.EAGER, cascade = { CascadeType.PERSIST, CascadeType.DETACH,
			CascadeType.MERGE, CascadeType.REFRESH })
	@JoinTable(name = "USER_ROLES", joinColumns = { @JoinColumn(name = "USER_ID") }, inverseJoinColumns = {
			@JoinColumn(name = "ROLE_ID") })
	private Set<Role> roles;

//	// company foreign key relation
//	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
//	@JoinTable(name = "COMPANY_USER", joinColumns = { @JoinColumn(name = "USER_ID") }, inverseJoinColumns = {
//			@JoinColumn(name = "ACCOUNT_ID") })
//	private Sys_Accounts company;

	// @JsonBackReference

//	@ManyToOne(fetch = FetchType.EAGER, optional = false)
//	@JoinColumn(name = "ACCOUNT_ID")
//	@JsonIgnore
//	private Sys_Accounts sys_accounts;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ACCOUNT_ID")
	@JsonBackReference
	private Sys_Accounts sys_account;

//    @Column(name = "ACCOUNT_ID")
//	private Long accountId;

//	public User() {
//		super();
//	}

//	public String getFullName() {
//		return this.firstName + " " + this.lastName;
//	}

//	@Override
//	public int compareTo(User o) {
//		return getCreatedAt().compareTo(o.getCreatedAt());
//	}

}