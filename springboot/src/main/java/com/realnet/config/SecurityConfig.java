package com.realnet.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.realnet.logging.NoLogging;
import com.realnet.logging.SecurityNoLogging;

/*
 * @EnableGlobalMethodSecurity annotation is what enables the @PreAuthorize annotation.
 * */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private JwtAuthenticationEntryPoint unauthorizedHandler;

	@NoLogging
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@NoLogging
	@Autowired
	public void globalUserDetails(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userDetailsService).passwordEncoder(encoder());
	}

	@NoLogging
	@Bean
	public JwtAuthenticationFilter authenticationTokenFilterBean() throws Exception {
		return new JwtAuthenticationFilter();
	}

	@NoLogging
	@Override
	public void configure(WebSecurity web) throws Exception {
		// Filters will not get executed for the resources
		web.ignoring().antMatchers("/", "/resources/**", "/static/**", "/public/**", "/webui/**", "/h2-console/**",
				"/configuration/**", "/swagger-ui/**", "/swagger-resources/**", "/webjars/**", "/api-docs",
				"/api-docs/**", "/v2/api-docs/**", "/*.html", "/**/*.html", "/**/*.css", "/**/*.js", "/**/*.png",
				"/**/*.jpg", "/**/*.gif", "/**/*.svg", "/**/*.ico", "/**/*.ttf", "/**/*.woff", "/**/*.otf");
	}

	// If Security is not working check application.properties if it is set to
	// ignore
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http.exceptionHandling().and().anonymous().and()
//				// Disable Cross site references
//				.csrf().disable()
//				// Add CORS Filter
//				.addFilterBefore(new CorsFilter(), ChannelProcessingFilter.class)
//				// Custom Token based authentication based on the header previously given to the
//				// client
//				.addFilterBefore(new VerifyTokenFilter(tokenUtil), UsernamePasswordAuthenticationFilter.class)
//				// custom JSON based authentication by POST of
//				// {"username":"<name>","password":"<password>"} which sets the token header
//				// upon authentication
//				.addFilterBefore(new GenerateTokenForUserFilter("/session", authenticationManager(), tokenUtil),
//						UsernamePasswordAuthenticationFilter.class)
//				.authorizeRequests()
//				//.antMatchers("/api/instructors/**").hasRole("ADMIN")
//				//.antMatchers("/api/customers/**").hasRole(role)
//				.anyRequest().authenticated();
//	}

	@NoLogging
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable()
				// Add CORS Filter //http.cors().and().csrf().disable().
				.addFilterBefore(new CorsFilter(), ChannelProcessingFilter.class).authorizeRequests()
				.antMatchers("/token/**").permitAll()
				//.antMatchers("/api/**").permitAll()
				.anyRequest().authenticated()
				.and().exceptionHandling()
				.authenticationEntryPoint(unauthorizedHandler).and().sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		http.addFilterBefore(authenticationTokenFilterBean(), UsernamePasswordAuthenticationFilter.class);
	}

	/*
	 * http.csrf().disable().exceptionHandling().authenticationEntryPoint(
	 * unauthorizedHandler).and()
	 * .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).
	 * and().authorizeRequests() .antMatchers("/token/**",
	 * "/signup").permitAll().antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
	 * .anyRequest().authenticated();
	 * 
	 * http.addFilterBefore(authenticationTokenFilterBean(),
	 * UsernamePasswordAuthenticationFilter.class);
	 */

	/*
	 * If You want to store encoded password in your databases and authenticate user
	 * based on encoded password then uncomment the below method and provde an
	 * encoder
	 */
	@NoLogging
	@Bean
	public BCryptPasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}
	
//	@Bean
//	public CommonsMultipartResolver getCommonsMultipartResolver() {
//		CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
//		multipartResolver.setMaxUploadSize(104857600); // 20MB(20971520 Byte) // 100 mb(104,857,600 Byte)
//		multipartResolver.setMaxInMemorySize(1048576); // 1MB
//		return multipartResolver;
//	}

}
