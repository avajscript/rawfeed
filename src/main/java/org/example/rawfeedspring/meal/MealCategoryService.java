package org.example.rawfeedspring.meal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MealCategoryService {
    @Autowired
    private MealCategoryRepository mealCategoryRepository;

    public List<MealCategory> getAllMealCategories() {
        return mealCategoryRepository.findAll();
    }

    public MealCategory saveMealCategory(MealCategory mealCategory) {
        return mealCategoryRepository.save(mealCategory);
    }

    public void deleteMealCategoryById(Integer mealCategoryId) {
        mealCategoryRepository.deleteById(mealCategoryId);
    }
}
