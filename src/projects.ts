import commerce_pic from "./assets/project-images/commerce_pic.png";
import noteboard_pic from "./assets/project-images/noteboard_pic.png";
import real_estate_pic from "./assets/project-images/fastighets_pic.png";
import income_tracker_pic from "./assets/project-images/incomeTracker_pic.png";
import book_library_pic from "./assets/project-images/library_pic.png";
import tiktok_pic from "./assets/project-images/tiktok_pic.png";
import to_do_list_pic from "./assets/project-images/To-do_list_pic.png";
import calculator_pic from "./assets/project-images/calculator_pic.png";
import chatApp_pic from "./assets/project-images/chatApp_pic.png";


export const projects = [
    {
      id: 1,
      title: 'Noteboard App',
      description: 'An app that lets you sign up with an account to create and share noteboards where you and your friends can add notes and move them around. If you want to test it out use the email: axel@demo.com and password: demo01',
      image: noteboard_pic,
      tech: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
      category: 'Web Dev',
      featured: false,
      code: 'https://github.com/Ackemannen/noteboard-app',
      live: 'https://ackemannen.github.io/noteboard-app/',
    },
    {
      id: 2,
      title: 'E-commerce site',
      description: 'A e-commerce site made with react that has a home page where you can scroll products and add them to your cart. You can also check out collections and products..',
      image: commerce_pic,
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      category: 'Web Dev',
      featured: false,
      code: 'https://github.com/Ackemannen/e-commerce',
      live: 'https://ackemannen.github.io/e-commerce/',
    },
    {
      id: 3,
      title: 'VoxityChat - Chat App',
      description: 'A fullstack chat app made with MERN that lets you create an account and chat and call other users. If you want to test it out use the email: axel@demo.com and password: demo01',
      image: chatApp_pic,
      tech: ['React', 'MongoDB', 'Tailwind', 'Node.js', 'Express.js'],
      category: 'Web Dev',
      featured: true,
      code: 'https://github.com/Ackemannen/chat-app',
      live: 'https://chat-app-vidr.onrender.com',
    },
    {
      id: 4,
      title: 'Real estate agency',
      description: 'A real estate website made with react that has a home page where you can scroll properties and view them. You can also check out the about page and contact page.',
      image: real_estate_pic,
      tech: ['React', 'JavaScript', 'HTML', 'CSS'],
      category: 'Web Dev',
      featured: false,
      code: 'https://github.com/Ackemannen/FastighetsSida',
      live: 'https://ackemannen.github.io/FastighetsSida/',
    },
    {
      id: 5,
      title: 'Income Tracker',
      description: 'An income tracker made with react that lets you add and remove incomes and expenses and see your total balance. You can also see your income and expense history.',
      image: income_tracker_pic,
      tech: ['React', 'JavaScript', 'HTML', 'CSS'],
      category: 'Mobile',
      featured: false,
      code: 'https://github.com/Ackemannen/IncomeTracker',
      live: 'https://ackemannen.github.io/IncomeTracker/',
    },
    {
      id: 6,
      title: 'Book library site',
      description: 'A book library site made with react that has authentication and a database via firebase. This site lets you log in and add books and lets you rate and comment them in your own library. You can test out the site using test@test.com and test123 as email and password.',
      image: book_library_pic,
      tech: ['React', 'JavaScript', 'HTML', 'CSS'],
      category: 'Web Dev',
      featured: false,
      code: 'https://github.com/Ackemannen/library-app',
      live: 'https://ackemannen.github.io/library-app/',
    },
    {
      id: 7,
      title: 'TikTok Clone',
      description: 'A TikTok clone made with react that has a home page where you can scroll videos and like them and view comments. You can also check out your profile and see your videos.',
      image: tiktok_pic,
      tech: ['React', 'JavaScript', 'HTML', 'CSS'],
      category: 'Mobile',
      featured: false,
      code: 'https://github.com/Ackemannen/tiktokClone',
      live: 'https://ackemannen.github.io/tiktokClone/',
    },
    {
      id: 8,
      title: 'To Do List',
      description: 'A to do list that you can add and remove tasks from. And saves them to local storage.',
      image: to_do_list_pic,
      tech: ['JavaScript', 'HTML', 'CSS'],
      category: 'Mobile',
      featured: false,
      code: 'https://github.com/Ackemannen/to-do-list',
      live: 'https://ackemannen.github.io/to-do-list/',
    },
    {
      id: 9,
      title: 'Calculator App',
      description: 'Using QuerySelectorAll I loaded in all the number buttons so that the code is cleaner rather than loading in each button for them self.',
      image: calculator_pic,
      tech: ['JavaScript', 'HTML', 'CSS'],
      category: 'Mobile',
      featured: false,
      code: 'https://github.com/Ackemannen/Calculator',
      live: 'https://ackemannen.github.io/Calculator/',
    },
];