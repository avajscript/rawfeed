export class DBCommunication {
    // Returns all meals from database
    static async getMeals() {
        let response;
        try {
            response = await fetch(process.env.REACT_APP_BASE_URL + "/meals", {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            // error fetching meals
            if (!response.ok) {
                console.log(response)
                console.log("Error fetching meals: " + response.statusText);
                return null;
            }
            // return the meals
            const meals = await response.json();
            return meals;
        } catch (error) {
            console.log("Error fetching meals");
            console.log(error);
            return null;
        }
    }

    // adds meal to the database
    static async postMeal(meal) {
        let response;
        try {
            response = await fetch(process.env.REACT_APP_BASE_URL + "/meals", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(meal)
            });
            return {response: response, status: "success", message: "Successfully added meal to database"}
        } catch (error) {
            console.log("Error creating meal");
            console.log(error);
            return {
                response: null, status: "error", message: error.message
            };
        }
    }

    // adds meal category to the database
    static async postMealCategory(name, description, image_url, parent_category) {
        let response;
        try {
            response = await fetch(process.env.REACT_APP_BASE_URL + "/mealCategories", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    description,
                    image_url,
                    parent_category
                })
            });
            return {response: response, status: "success", message: "None"}
        } catch (error) {
            console.log("Error creating meal category");
            console.log(error);
            return {response: null, status: "error", message: error.message};
        }
    }

    // Returns all meal categories from the database
    static async getMealCategories() {
        let response;
        try {
            response = await fetch(process.env.REACT_APP_BASE_URL + "/mealCategories", {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            response = await response.json();
            return {response: response, status: "success", message: "Successfully fetched meal categories"}
        } catch (error) {
            console.log("Error fetching meal categories");
            console.log(error);
            return {response: null, status: "error", message: error.message};
        }
    }


}