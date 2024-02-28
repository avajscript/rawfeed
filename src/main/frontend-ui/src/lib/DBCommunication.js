export class DBCommunication {
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

    static async postMealCategory(name, description, image_url) {
        let response;
        try {
            const mealCategory = await fetch(process.env.REACT_APP_BASE_URL + "/mealCategories", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    description,
                    image_url
                })
            });
            console.log(mealCategory);
        } catch (error) {
            console.log("Error creating meal category");
            console.log(error);
            return null;
        }
    }
}