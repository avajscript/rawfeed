package org.example.rawfeedspring.meal;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MealCategoryRepository extends JpaRepository<MealCategory, Integer> {
    List<MealCategory> findAll();
}
