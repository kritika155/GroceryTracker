export default function Home() {
  return (
    <div>
      <section id="search-banner">
        <img src="public/images/bg-1.png" class="bg-1" alt="bg" />
        <img src="public/images/bg-2.png" class="bg-2" alt="bg-2" />

        <div class="search-banner-text">
          <h1>Order Your daily Groceries</h1>
          <strong>#Free Delivery</strong>

          <form action="" class="search-box">
            <i class="fas fa-search"></i>

            <input
              type="text"
              class="search-input"
              placeholder="Search your daily groceries"
              name="search"
              required
            />

            <input type="submit" class="search-btn" value="Search" />
          </form>
        </div>
      </section>

      <section id="category">
        <div class="category-heading">
          <h2>Category</h2>
          <span>All</span>
        </div>

        <div class="category-container">
          <a href="#" class="category-box">
            <img src="D:\eGrocery/images/fish.png" alt="Fish" />
            <span>Fish & Meat</span>
          </a>

          <a href="#" class="category-box">
            <img src="D:\eGrocery/images/Vegetables.png" alt="Fish" />
            <span>Vegatbles</span>
          </a>

          <a href="#" class="category-box">
            <img src="D:\eGrocery/images/medicine.png" alt="Fish" />
            <span>Medicine</span>
          </a>

          <a href="#" class="category-box">
            <img src="D:\eGrocery/images/baby.png" alt="Fish" />
            <span>Baby</span>
          </a>

          <a href="#" class="category-box">
            <img src="D:\eGrocery/images/office.png" alt="Fish" />
            <span>Office</span>
          </a>

          <a href="#" class="category-box">
            <img src="D:\eGrocery/images/beauty.png" alt="Fish" />
            <span>Beauty</span>
          </a>

          <a href="#" class="category-box">
            <img src="D:\eGrocery/images/Gardening.png" alt="Fish" />
            <span>Gardening</span>
          </a>
        </div>
      </section>
    </div>
  );
}
