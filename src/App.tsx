import Header from "./components/Header";
import Meal from "./components/Meal";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
function App() {
  const meals = [
    {
      id: 1,
      name: "Grilled Chicken Salad",
      description:
        "Freshly grilled chicken breast served on a bed of mixed greens with tomatoes, cucumbers, and your choice of dressing.",
      price: 10.99,
      image:
        "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description:
        "Classic pizza topped with tomato sauce, fresh mozzarella cheese, tomatoes, and basil leaves.",
      price: 12.99,
      image:  "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
    },
    {
      id: 3,
      name: "Beef Burger",
      description:
        "Juicy beef patty topped with cheese, lettuce, tomato, onion, and pickles, served on a sesame seed bun.",
      price: 9.99,
      image:
        "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
    },
    {
      id: 4,
      name: "Sushi Platter",
      description:
        "Assorted sushi rolls including tuna, salmon, shrimp, and avocado, served with soy sauce and wasabi.",
      price: 18.99,
      image:
        "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
    },
    {
      id: 5,
      name: "Caesar Salad",
      description:
        "Crisp romaine lettuce tossed with Caesar dressing, croutons, and grated Parmesan cheese.",
      price: 8.99,
      image:
        "https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg",
    },
    {
      id: 6,
      name: "Pasta Carbonara",
      description:
        "Creamy pasta dish made with eggs, cheese, pancetta, and black pepper.",
      price: 14.99,
      image:
        "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
    },
    {
      id: 7,
      name: "Chicken Alfredo",
      description:
        "Fettuccine pasta topped with creamy Alfredo sauce and grilled chicken breast.",
      price: 13.99,
      image:
        "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",
    },
    {
      id: 8,
      name: "Fish and Chips",
      description:
        "Beer-battered fish fillets served with crispy fries and tartar sauce.",
      price: 11.99,
      image:
        "https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg",
    },
    {
      id: 9,
      name: "Vegetable Stir Fry",
      description:
        "Assorted vegetables stir-fried in a savory sauce, served over steamed rice.",
      price: 9.99,
      image:
        "https://www.themealdb.com/images/media/meals/1520084413.jpg",
    },
    {
      id: 10,
      name: "Mushroom Risotto",
      description:
        "Creamy Italian rice dish cooked with mushrooms, onions, white wine, and Parmesan cheese.",
      price: 15.99,
      image:
        "https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg",
    },
    {
      id: 11,
      name: "Tacos",
      description:
        "Soft corn tortillas filled with seasoned beef, lettuce, cheese, and salsa.",
      price: 7.99,
      image: "https://www.themealdb.com/images/media/meals/1525873040.jpg",
    },
    {
      id: 12,
      name: "Chicken Quesadilla",
      description:
        "Flour tortilla filled with grilled chicken, cheese, onions, and peppers, served with salsa and sour cream.",
      price: 9.99,
      image:
        "https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg",
    },
    {
      id: 13,
      name: "Pancakes",
      description: "Fluffy pancakes served with butter and maple syrup.",
      price: 6.99,
      image:
        "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
    },
    {
      id: 14,
      name: "French Toast",
      description:
        "Thick slices of bread dipped in a mixture of eggs and milk, fried until golden brown, and served with syrup.",
      price: 8.99,
      image:
        "https://www.themealdb.com/images/media/meals/xquakq1619787532.jpg",
    },
    {
      id: 15,
      name: "Chicken Parmesan",
      description:
        "Breaded chicken cutlets topped with marinara sauce and melted mozzarella cheese, served over spaghetti.",
      price: 16.99,
      image:
        "https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",
    },
    {
      id: 16,
      name: "Steak",
      description:
        "Juicy sirloin steak grilled to perfection, served with mashed potatoes and seasonal vegetables.",
      price: 19.99,
      image:
        "https://www.themealdb.com/images/media/meals/uwxusv1487344500.jpg",
    },
    {
      id: 17,
      name: "BBQ Ribs",
      description:
        "Tender pork ribs slow-cooked and basted in tangy barbecue sauce, served with coleslaw and fries.",
      price: 22.99,
      image: "https://www.themealdb.com/images/media/meals/1549542994.jpg",
    },
    {
      id: 18,
      name: "Vegetarian Pizza",
      description:
        "Pizza topped with tomato sauce, cheese, mushrooms, bell peppers, onions, and olives.",
      price: 11.99,
      image:
        "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg",
    },
    {
      id: 19,
      name: "Pasta Primavera",
      description:
        "Pasta dish made with assorted fresh vegetables, garlic, olive oil, and Parmesan cheese.",
      price: 13.99,
      image:
        "https://www.themealdb.com/images/media/meals/vytypy1511883765.jpg",
    },
    {
      id: 20,
      name: "Chocolate Cake",
      description:
        "Rich and moist chocolate cake topped with chocolate frosting and chocolate shavings.",
      price: 8.99,
      image:
        "https://www.themealdb.com/images/media/meals/wqqvyq1511179730.jpg",
    },
  ];

  return (
    <>
      <UserProgressProvider>
        <CartContextProvider>
          <div className="bg-gradient-to-r  from-[#29251c] to-[#2c2306] h-full font-raleway ">
            <Header />
            <Meal meals={meals} />
            <Cart />
            <Checkout />
          </div>
        </CartContextProvider>
      </UserProgressProvider>
    </>
  );
}

export default App;
