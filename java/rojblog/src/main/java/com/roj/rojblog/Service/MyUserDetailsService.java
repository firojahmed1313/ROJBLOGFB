package com.roj.rojblog.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.roj.rojblog.Model.UserPrincipal;
import com.roj.rojblog.Model.Users;
import com.roj.rojblog.Repo.UserRepo;

@Service
public class MyUserDetailsService implements UserDetailsService {
	@Autowired
	UserRepo ur;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {	
		Users user = ur.findByEmail(username);
        if (user == null) {
            System.out.println("User Not Found");
            throw new UsernameNotFoundException("user not found");
        }
		return new UserPrincipal(user);
	}
}