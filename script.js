
const menuData = {
  en: {
    Juice: ["Orange Juice", "Mango Shake", "Banana Smoothie", "Pineapple Juice", "Watermelon Juice", "Apple Juice", "Grape Juice", "Papaya Juice", "Lemonade", "Avocado Shake", "Carrot Juice", "Strawberry Shake", "Coconut Water", "Mint Juice", "Mixed Fruit Juice"],
    FastFood: ["Burger", "Pizza", "Sandwich", "Fried Chicken", "Hot Dog", "Nuggets", "Taco", "Fries", "Shawarma", "Kebab Roll", "Wrap", "Cheese Balls", "Fish Finger", "Grilled Cheese", "Popcorn Chicken"],
    Traditional: ["Rice and Curry", "Beef Korma", "Chicken Roast", "Dal", "Vegetable Curry", "Paratha", "Polao", "Khichuri", "Fish Fry", "Mutton Curry", "Egg Curry", "Mixed Vegetables", "Paneer Masala", "Luchi", "Chingri Malai Curry"]
  },
  bn: {
    Juice: ["কমলা জুস", "আম শেক", "কলা স্মুদি", "আনারস জুস", "তরমুজ জুস", "আপেল জুস", "আঙুর জুস", "পেঁপে জুস", "লেবুর শরবত", "এভোকাডো শেক", "গাজরের জুস", "স্ট্রবেরি শেক", "নারকেল পানি", "পুদিনা জুস", "মিক্স ফলের জুস"],
    FastFood: ["বার্গার", "পিজ্জা", "স্যান্ডউইচ", "ভাজা চিকেন", "হট ডগ", "নাগেটস", "টাকো", "ফ্রাই", "শাওয়ারমা", "কাবাব রোল", "র‍্যাপ", "চিজ বল", "ফিশ ফিংগার", "গ্রিলড চিজ", "পপকর্ন চিকেন"],
    Traditional: ["ভাত ও তরকারি", "গরুর কোরমা", "মুরগির রোস্ট", "ডাল", "সবজি তরকারি", "পরোটা", "পোলাও", "খিচুড়ি", "মাছ ভাজি", "মাটন কারি", "ডিম কারি", "মিক্সড সবজি", "পনির মাসালা", "লুচি", "চিংড়ি মালাই কারি"]
  },
  ar: {
    Juice: ["عصير برتقال", "ميلك شيك مانجو", "سموذي موز", "عصير أناناس", "عصير بطيخ", "عصير تفاح", "عصير عنب", "عصير بابايا", "ليموناضة", "ميلك شيك أفوكادو", "عصير جزر", "ميلك شيك فراولة", "ماء جوز الهند", "عصير نعناع", "عصير فواكه مشكلة"],
    FastFood: ["برغر", "بيتزا", "ساندويتش", "دجاج مقلي", "هوت دوج", "ناجتس", "تاكو", "بطاطس مقلية", "شاورما", "رول كباب", "راب", "كرات الجبن", "أصابع السمك", "جبنة مشوية", "دجاج بوب كورن"],
    Traditional: ["أرز وكاري", "لحم بقري كورما", "دجاج مشوي", "دال", "خضار بالكاري", "باراثا", "بولاو", "خيشتوري", "سمك مقلي", "كاري لحم الضأن", "كاري البيض", "خضار مشكلة", "بانير ماسالا", "لوتشي", "روبيان بصلصة جوز الهند"]
  }
};

function renderMenu(lang) {
  const container = document.getElementById("menu");
  container.innerHTML = "";
  for (const [category, items] of Object.entries(menuData[lang])) {
    const section = document.createElement("div");
    section.className = "category";
    section.innerHTML = `<h2>${category}</h2><ul>` + items.map(item => `<li>${item}</li>`).join("") + "</ul>";
    container.appendChild(section);
  }
}

document.getElementById("language-switcher").addEventListener("change", (e) => {
  renderMenu(e.target.value);
});

renderMenu("en");
