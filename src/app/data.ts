  // src/app/data.ts
  export const SLIDES = [
    {
      image: 'assets/images/red_chilli.png',
      title: 'Red kimchi using cabbage',
      subtitle: 'Made with 100% domestic ingredients and deep-sea water',
      // description: 'Galaxy A35 5G',
      // price: 'From ₹19,999'
    },
    {
      image: 'assets/images/Hevior_Heading.png',
      title: 'Hemp Care Paradigam',
      subtitle: 'The Ultimate Skin Comfort with Hemp',
      // description: 'Super Retina Display',
      // price: 'From ₹69,999'
    },
    {
      image: 'assets/images/uneako_product.png',
      title: 'Climate Positive Products',
      subtitle: 'Make plant happy',
      // description: 'OnePlus 12R 5G',
      // price: 'From ₹34,999'
    },
     {
      image: 'assets/images/Hevior_combo_HD.png',
      // title: 'Climate Positive Products',
      // subtitle: 'Make plant happy',
      // description: 'OnePlus 12R 5G',
      // price: 'From ₹34,999'
    },

  ];











  // src/app/data.ts
  export interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice: number;
    image: string;
    brand: string;
  }

  export const PRODUCTS: Product[] = [
    {
      id: 1,
      name: "Barley Kimchi 180kcal",
      price: 899,
      oldPrice: 2799,
      image: "assets/images/Kimchi Image/kimchijar1.png",
      brand: "JEJU"
    },

    {
      id: 2,
      name: "Barley Kimchi 220kcal",
      price: 899,
      oldPrice: 2799,
      image: "assets/images/Kimchi Image/kimchijar2.png",
      brand: "JEJU"
    },

    {
      id: 3,
      name: "Barley Kimchi 140kcal",
      price: 899,
      oldPrice: 2799,
      image: "assets/images/Kimchi Image/kimchijar3.png",
      brand: "JEJU"
    },
    {
      id: 4,
      name: "Hemp stem claming cream",
      price: 199,
      oldPrice: 549,
      image: "assets/images/Havior_cream_image/Hemp_stem_claming_cream.png",
      brand: "Cream"
    },
    {
      id: 5,
      name: "Hemp stem claming serum",
      price: 499,
      oldPrice: 1399,
      image: "assets/images/Havior_cream_image/Hemp_stem_claming_serum.png",
      brand: "Serum"
    },
    {
      id: 6,
      name: "Hemp stem claming cream toner pad",
      price: 899,
      oldPrice: 2799,
      image: "assets/images/Havior_cream_image/Hemp_stem_claming_toner_pad.png",
      brand: "Toner pad"
    },
    {
      id: 7,
      name: "Uneako clear file folder",
      price: 649,
      oldPrice: 1799,
      image: "assets/images/Uneko_Images/ Clear_file_folder/1.webp",
      brand: "file folder"
    },
    {
      id: 8,
      name: "Naad bamboo sound amplifier",
      price: 449,
      oldPrice: 1249,
      image: "assets/images/Uneko_Images/bamboo_speaker/2.webp",
      brand: "Bamboo speaker"
    },
    {
      id: 9,
      name: "a sustainable blend of handcrafted elegance and eco-consciousness",
      price: 449,
      oldPrice: 1249,
      image: "assets/images/Uneko_Images/Bhoosa_sheet/Uneako Product Listing 2kx2k only images (2).jpg",
      brand: "Bhoosa Sheets Bundle"
    },
    {
      id: 10,
      name: "focus on sustainable materials and addressing indoor air quality",
      price: 449,
      oldPrice: 1249,
      image: "assets/images/Uneko_Images/Cair_purifier/1.webp",
      brand: "Cair Air purifier Round Box"
    },
    {
      id: 11,
      name: "Ecofriendly conference pad with tulsi seeds infused in its cover page, And 16 perforated recycled pages inside Also for a better writing experience.",
      price: 449,
      oldPrice: 1249,
      image: "assets/images/Uneko_Images/conference_pad_Pack/2.webp",
      brand: "Ecofriendly conference pad (Pack of 10)"
    },
    {
      id: 12,
      name: "Cork Mousepad Equally Upgrade your workspace with a natural mousepad. ",
      price: 449,
      oldPrice: 1249,
      image: "assets/images/Uneko_Images/Cork_mousepad/3.jpg",
      brand: "Cork mousepad Eco-friendly comfort"
    },
    {
      id: 13,
      name: "Cork Mousepad Equally Upgrade your workspace with a natural mousepad. ",
      price: 449,
      oldPrice: 1249,
      image: "assets/images/Uneko_Images/Cork_mousepad/3.jpg",
      brand: "Cork mousepad Eco-friendly comfort"
    },
    {
      id: 14,
      name: "Cork Mousepad Equally Upgrade your workspace with a natural mousepad. ",
      price: 449,
      oldPrice: 1249,
      image: "assets/images/Uneko_Images/Cork_mousepad/3.jpg",
      brand: "Cork mousepad Eco-friendly comfort"
    },
    {
      id: 15,
      name: "This consists of 1 wooden waste diary of 160 pages which is 100% eco friendly.",
      price: 449,
      oldPrice: 1249,
      image: "assets/images/Uneko_Images/diary1/home_dir1.webp",
      brand: "Diary Kit with Bamboo pen"
    }
  ];



    export const PRODUCT_CARDS = [

      {
      id: 1,
      brand: "HIGH STAR",
      title: "Women’s Shirt",
      description: "Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.",
      imgFront: "https://uneako.com/wp-content/uploads/2024/04/1-11.webp",
      imgBack: "assets/images/Kimchi Image/kimchijar1.png",
      images: [
        "https://uneako.com/wp-content/uploads/2024/04/1-11.webp",
        "assets/images/kimchibowl.png",
        "assets/images/kimchibowl.png",
        "assets/images/Kimchi Image/kimchijar1.png",
        "assets/images/kimchibowl.png"
      ],
      price: {
        old: 2000,
        discount: "-56%"
      },
      rating: 4,
      reviews: 600,
      colors: [
        { name: "White", image: "assets/images/logo.jpeg" },
        { name: "Blue", image: "assets/images/logo.jpeg" },
        { name: "Red", image: "assets/images/logo.jpeg" }
      ],
      sizes: ["M", "L", "XL"],
      delivery: {
        location: "Lucknow, India"
      },
      details: {
        material: "Cotton",
        sleeve: "Long Sleeve",
        fit: "Oversized",
        collar: "Spread Collar"
      }
    },
    {
      id: 2,
      brand: "HIGH STAR",
      title: "men’s Shirt",
      description: "Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.Trendy oversized cotton shirt perfect for casual outings.",
      imgFront: "https://uneako.com/wp-content/uploads/2024/04/1-11.webp",
      imgBack: "assets/images/Kimchi Image/kimchijar1.png",
      images: [
        "assets/images/kimchibowl.png",
        "assets/images/kimchibowl.png",
        "assets/images/Kimchi Image/kimchijar2.png",
        "assets/images/kimchibowl.png"
      ],
      price: {
        old: 100,
        discount: "-56%"
      },
      rating: 5,
      reviews: 600,
      colors: [
        { name: "White", image: "assets/images/logo.jpeg" },
        { name: "Blue", image: "assets/images/logo.jpeg" },
        { name: "Red", image: "assets/images/logo.jpeg" }
      ],
      sizes: ["M", "L", "XL"],
      delivery: {
        location: "Lucknow, India"
      },
      details: {
        material: "Cotton",
        sleeve: "Long Sleeve",
        fit: "Oversized",
        collar: "Spread Collar"
      }
    },
    {
      id: 3,
      title: 'Fewture Cotton Bag',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi Image/kimchijar3.png',
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 4,
      title: 'Stylus File Folder',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi Image/kimchijar1.png',
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 5,
      title: 'Eco Large Jute Custom Bag',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi Image/kimchijar2.png',
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 6,
      title: 'Charcoal Face Pack',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi Image/kimchijar3.png',
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 7,
      title: 'Fewture Cotton Bag',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi Image/kimchijar1.png',
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 8,
      title: 'Stylus File Folder',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi Image/kimchijar2.png',
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 9,
      title: 'Eco Large Jute Custom Bag',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi Image/kimchijar3.png',
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 10,
      title: 'Charcoal Face Pack',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: "assets/images/Kimchi Image/kimchijar1.png",
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 11,
      title: 'Fewture Cotton Bag',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi Image/kimchijar1.png',
      imgBack: 'assets/images/kimchibowl.png'
    },
    {
      id: 12,
      title: 'Stylus File Folder',
      price: {
        current: 700,
        old: 1599,
        discount: "-56%"
      },
      imgFront: 'assets/images/Kimchi Image/kimchijar2.png',
      imgBack: 'assets/images/kimchibowl.png'
    }
  ];
