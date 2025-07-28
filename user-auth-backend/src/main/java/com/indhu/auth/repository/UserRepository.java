package com.indhu.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.indhu.auth.model.User;


public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmailId(String email_id);
    User findByEmailId(String email_id); // <-- Add this line
}
