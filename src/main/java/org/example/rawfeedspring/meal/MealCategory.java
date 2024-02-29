package org.example.rawfeedspring.meal;

import jakarta.persistence.*;

/**
 *
 */
@Entity
public class MealCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "meal_category_id")
    private int id;
    protected String name;
    protected String description;
    protected String image_url;
    @OneToOne
    @JoinColumn(name = "parent_category_id")
    protected MealCategory parent_category;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public MealCategory getParent_category() {
        return parent_category;
    }

    public void setParent_category(MealCategory parent_category) {
        this.parent_category = parent_category;
    }
}
