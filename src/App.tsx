import Header from "./components/Header"
import Meal from "./components/Meal"
function App() {
  
   const meals = [
      {
        id: 1,
        name: "Grilled Chicken Salad",
        description: "Freshly grilled chicken breast served on a bed of mixed greens with tomatoes, cucumbers, and your choice of dressing.",
        price: 10.99,
        image: "https://via.placeholder.com/800x600/FF5733/FFFFFF?text=Grilled+Chicken+Salad"
      },
      {
        id: 2,
        name: "Margherita Pizza",
        description: "Classic pizza topped with tomato sauce, fresh mozzarella cheese, tomatoes, and basil leaves.",
        price: 12.99,
        image: "https://via.placeholder.com/800x600/FFC300/FFFFFF?text=Margherita+Pizza"
      },
      {
        id: 3,
        name: "Beef Burger",
        description: "Juicy beef patty topped with cheese, lettuce, tomato, onion, and pickles, served on a sesame seed bun.",
        price: 9.99,
        image: "https://via.placeholder.com/800x600/3366CC/FFFFFF?text=Beef+Burger"
      },
      {
        id: 4,
        name: "Sushi Platter",
        description: "Assorted sushi rolls including tuna, salmon, shrimp, and avocado, served with soy sauce and wasabi.",
        price: 18.99,
        image: "https://via.placeholder.com/800x600/33CC33/FFFFFF?text=Sushi+Platter"
      },
      {
        id: 5,
        name: "Caesar Salad",
        description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and grated Parmesan cheese.",
        price: 8.99,
        image: "https://via.placeholder.com/800x600/9933FF/FFFFFF?text=Caesar+Salad"
      },
      {
        id: 6,
        name: "Pasta Carbonara",
        description: "Creamy pasta dish made with eggs, cheese, pancetta, and black pepper.",
        price: 14.99,
        image: "https://via.placeholder.com/800x600/FF5733/FFFFFF?text=Pasta+Carbonara"
      },
      {
        id: 7,
        name: "Chicken Alfredo",
        description: "Fettuccine pasta topped with creamy Alfredo sauce and grilled chicken breast.",
        price: 13.99,
        image: "https://via.placeholder.com/800x600/FFC300/FFFFFF?text=Chicken+Alfredo"
      },
      {
        id: 8,
        name: "Fish and Chips",
        description: "Beer-battered fish fillets served with crispy fries and tartar sauce.",
        price: 11.99,
        image: "https://via.placeholder.com/800x600/3366CC/FFFFFF?text=Fish+and+Chips"
      },
      {
        id: 9,
        name: "Vegetable Stir Fry",
        description: "Assorted vegetables stir-fried in a savory sauce, served over steamed rice.",
        price: 9.99,
        image: "https://via.placeholder.com/800x600/33CC33/FFFFFF?text=Vegetable+Stir+Fry"
      },
      {
        id: 10,
        name: "Mushroom Risotto",
        description: "Creamy Italian rice dish cooked with mushrooms, onions, white wine, and Parmesan cheese.",
        price: 15.99,
        image: "https://via.placeholder.com/800x600/9933FF/FFFFFF?text=Mushroom+Risotto"
      },
      {
        id: 11,
        name: "Tacos",
        description: "Soft corn tortillas filled with seasoned beef, lettuce, cheese, and salsa.",
        price: 7.99,
        image: "https://via.placeholder.com/800x600/FF5733/FFFFFF?text=Tacos"
      },
      {
        id: 12,
        name: "Chicken Quesadilla",
        description: "Flour tortilla filled with grilled chicken, cheese, onions, and peppers, served with salsa and sour cream.",
        price: 9.99,
        image: "https://via.placeholder.com/800x600/FFC300/FFFFFF?text=Chicken+Quesadilla"
      },
      {
        id: 13,
        name: "Pancakes",
        description: "Fluffy pancakes served with butter and maple syrup.",
        price: 6.99,
        image: "https://via.placeholder.com/800x600/3366CC/FFFFFF?text=Pancakes"
      },
      {
        id: 14,
        name: "French Toast",
        description: "Thick slices of bread dipped in a mixture of eggs and milk, fried until golden brown, and served with syrup.",
        price: 8.99,
        image: "https://via.placeholder.com/800x600/33CC33/FFFFFF?text=French+Toast"
      },
      {
        id: 15,
        name: "Chicken Parmesan",
        description: "Breaded chicken cutlets topped with marinara sauce and melted mozzarella cheese, served over spaghetti.",
        price: 16.99,
        image: "https://via.placeholder.com/800x600/9933FF/FFFFFF?text=Chicken+Parmesan"
      },
      {
        id: 16,
        name: "Steak",
        description: "Juicy sirloin steak grilled to perfection, served with mashed potatoes and seasonal vegetables.",
        price: 19.99,
        image: "https://via.placeholder.com/800x600/FF5733/FFFFFF?text=Steak"
      },
      {
        id: 17,
        name: "BBQ Ribs",
        description: "Tender pork ribs slow-cooked and basted in tangy barbecue sauce, served with coleslaw and fries.",
        price: 22.99,
        image: "https://via.placeholder.com/800x600/FFC300/FFFFFF?text=BBQ+Ribs"
      },
      {
        id: 18,
        name: "Vegetarian Pizza",
        description: "Pizza topped with tomato sauce, cheese, mushrooms, bell peppers, onions, and olives.",
        price: 11.99,
        image: "https://via.placeholder.com/800x600/3366CC/FFFFFF?text=Vegetarian+Pizza"
      },
      {
        id: 19,
        name: "Pasta Primavera",
        description: "Pasta dish made with assorted fresh vegetables, garlic, olive oil, and Parmesan cheese.",
        price: 13.99,
        image: "https://via.placeholder.com/800x600/33CC33/FFFFFF?text=Pasta+Primavera"
      },
      {
        id: 20,
        name: "Chocolate Cake",
        description: "Rich and moist chocolate cake topped with chocolate frosting and chocolate shavings.",
        price: 8.99,
        image: "https://via.placeholder.com/800x600/9933FF/FFFFFF?text=Chocolate+Cake"
      }
        
  ]

  return (
    <>
      <div className="bg-gradient-to-r  from-[#29251c] to-[#2c2306] h-full font-raleway ">
        <Header />
        <Meal meals={meals}  />
     </div>
    </>
  )
}

export default App
