export interface Book {
  title: string;
  shelf: number;
}

export interface SubAlmirah {
  id: string;
  books: Book[];
}

export interface Almirah {
  id: string;
  subject: string;
  subAlmirahs: {
    a: SubAlmirah;
    b: SubAlmirah;
  };
}

export const almirahs: Almirah[] = [
  {
    id: "001",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-001",
        books: [
          { title: "Digital image Processing and Computer Vision By Sonka, Milan", shelf: 1 },
          { title: "Theory of Machines By S. S. Ratan", shelf: 1 },
          { title: "Theory of Machines By Sadhu Singh", shelf: 1 },
          { title: "Concept of Programming Languages  By Robert W. Sebesta", shelf: 2 },
          { title: "Theory of Machines By R. S. Khurmi", shelf: 3 },
          { title: "Theory of Machines By R. S. Khurmi", shelf: 4 },
          { title: "Theory of Machines By R. S. Khurmi", shelf: 5 },
          { title: "IT for Librarians By Ansari, K. Ravindran", shelf: 6 },
          { title: "Let Us C by Yashvant Kanetkar", shelf: 6 },
        ],
      },
      b: {
        id: "B-001",
        books: [
          { title: "Data Structures By Seymour Lipschut", shelf: 1 },
          { title: "Data Structures By Seymour Lipschut", shelf: 2 },
          { title: "Data Structures By Seymour Lipschut", shelf: 3 },
          { title: "Advanced Computer Architecture by Kai Hwang", shelf: 4 },
          { title: "Data structures using C and C++ By Yedidyah Langsam", shelf: 4 },
          { title: "Theory of Computer Science By K. L. P. Mishra", shelf: 4 },
          { title: "Concepts in Engineering Design By R. K. Gupta", shelf: 5 },
          { title: "Concepts in Engineering Design By R. K. Gupta", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "002",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-002",
        books: [
          { title: "Thermal Engineering By R. K. Rajput", shelf: 1 },
          { title: "Textbook of Thermal Engineering By R. S. Khurmi", shelf: 1 },
          { title: "Linear Integrated Circuits by Roy Choudhary", shelf: 2 },
          { title: "Monochrome and Colour Television By R. R. Gulati", shelf: 3 },
          { title: "Electromagnetic Waves And Radiating Systems By Edward C. Jordan", shelf: 4 },
          { title: "Object Oriented Modeling and Design with UML By Michael Blaha", shelf: 5 },
          { title: "Automata Theory & Formal Languages By A. K. Pandey", shelf: 5 },
          { title: "Automata Theory & For", shelf: 5 },
          { title: "Automata Theory Languages and Computation By John E. Hopcroft", shelf: 6 },
        ],
      },
      b: {
        id: "B-002",
        books: [
          { title: "Textbook of Fluid Mechanics and Hydraulic Machines By  RK Rajput", shelf: 1 },
          { title: "Disaster Management By Dhunna, Mukesh", shelf: 1 },
          { title: "Circuit Theory By A. Chakrabarti", shelf: 2 },
          { title: "Circuit Theory By A. Chakrabarti", shelf: 3 },
          { title: "Circuit Theory By A. Chakrabarti", shelf: 4 },
          { title: "Circuit Theory By A. Chakrabarti", shelf: 5 },
          { title: "Circuit Theory By A. Chakrabarti", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "003",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-003",
        books: [
          { title: "Communication Systems Engineering By  John G Proakis", shelf: 1 },
          { title: "Communication Systems Engineering By  Simon Haykin", shelf: 1 },
          { title: "Engineering Thermodynamics By P. K. Nag", shelf: 1 },
          { title: "Problem Solving and Program Design in C By Elliot Koffman", shelf: 2 },
          { title: "Microprocessor Information By  N Senthil Kumar", shelf: 2 },
          { title: "Object Oriented Analysis and Design with Applications By Grady Booch", shelf: 3 },
          { title: "Monochrome and Colour Television By R. K. Gulati", shelf: 4 },
          { title: "Monochrome and Colour Television By R. K. Gulati", shelf: 5 },
          { title: "Engineering Electromagnatics By  W. H. Hayt", shelf: 5 },
          { title: "Engineering Electromagnatics By  W. H. Hayt", shelf: 6 },
          { title: "Monochrome and Colour Television By R. K. Gulati", shelf: 6 },
        ],
      },
      b: {
        id: "B-003",
        books: [
          { title: "Programming in Visual Basic 6.0 By Bradley Julia", shelf: 1 },
          { title: "Programming in Visual Basic 6.0 By Bradley Julia", shelf: 2 },
          { title: "Programming in Visual Basic 6.0 By Bradley Julia", shelf: 3 },
          { title: "Entrepreneurship By D.H. Holt", shelf: 3 },
          { title: "Introduction to Unix and Shell Programming By M. G. Ventca", shelf: 3 },
          { title: "Object-Oriented Programming with C++ By E. Balagurusamy", shelf: 4 },
          { title: "Programming in C By A. N. Kamthane", shelf: 4 },
          { title: "Learning R By Richard Cotton", shelf: 4 },
          { title: "Object-Oriented Programming with C++ By E. Balagurusamy", shelf: 5 },
          { title: "Principles of Programming Language By Rajiv Chopra", shelf: 6 },
          { title: "Programming Language By Pratt W. Terrace", shelf: 6 },
          { title: "Data Science from Scratch By Joel Grus", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "004",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-004",
        books: [
          { title: "Data communication and Networking By Behrouz  Forouzan", shelf: 1 },
          { title: "Data communication and Networking By Behrouz  Forouzan", shelf: 2 },
          { title: "Data communication and Networking By Behrouz  Forouzan", shelf: 3 },
          { title: "Data communication and Networking By Behrouz  Forouzan", shelf: 4 },
          { title: "Data communication and Networking By Behrouz  Forouzan", shelf: 5 },
          { title: "Manet & High Speed Network By Pankaj Sharma", shelf: 6 },
          { title: "Fundamentals of Electronic Engineering By Saket Verma", shelf: 6 },
          { title: "Electronics Devices & Circuit Theory By Robert L. Boylestad", shelf: 6 },
          { title: "Electronic Circuit By Donald A Neamen", shelf: 6 },
          { title: "Classical Electroddynamics By Johan David Jordan", shelf: 6 },
          { title: "Electronic Circuits By A. P. Godse", shelf: 6 },
          { title: "Basic Electronics J. B. Gupta / S. K. Vijay / Shiv Shankar Mishra", shelf: 6 },
          { title: "Funcamental of Electronic Engineering By J. S. Katre", shelf: 6 },
          { title: "2000 Solved Problems in Digital Electronic By S. P. Bali", shelf: 6 },
          { title: "Digital Electronics By J. S. Katre", shelf: 6 },
          { title: "Information Storage & Management By Pankaj Sharma", shelf: 6 },
        ],
      },
      b: {
        id: "B-004",
        books: [
          { title: "A Textbook of Fluid Mechanics and Hydraulic Machines By R. K. Bansal", shelf: 1 },
          { title: "Microprocessors & Interfacing By N. S. Kumar", shelf: 2 },
          { title: "Microprocessors and Microcontrollers By Kani, A. Nagoor", shelf: 2 },
          { title: "Digital Design By John K. Wakerly", shelf: 3 },
          { title: "Fundamental of Electronic Engineering By Akhilesh K. Upadhyay", shelf: 3 },
          { title: "Introduction to Nanoscience and Nanotechnology By Chattopadhyay K.K", shelf: 3 },
          { title: "CMOS VLS Design By Neil H. E. Weste", shelf: 4 },
          { title: "Problems in Operations Research By Prem Kumar Gupta", shelf: 5 },
          { title: "Problems in Operations Research By Prem Kumar Gupta", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "005",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-005",
        books: [
          { title: "Network Analysis By G. K. Mittal", shelf: 1 },
          { title: "Network Analysis By G. K. Mittal", shelf: 2 },
          { title: "Network Analysis By Van Valkenbury", shelf: 3 },
          { title: "Network Analysis By Van Valkenbury", shelf: 4 },
          { title: "Network Analysis By G. K. Mithal", shelf: 5 },
          { title: "Network Analysis By G. K. Mithal", shelf: 6 },
        ],
      },
      b: {
        id: "B-005",
        books: [
          { title: "Optical Fiber Communication By Gerd Keiser", shelf: 1 },
          { title: "Optical Fiber Communication By Gerd Keiser", shelf: 2 },
          { title: "Utilization of Electric Power & Electric Traction By  J.B. Gupta", shelf: 3 },
          { title: "Understanding the Linux Kernel By Daniel P. Bovet", shelf: 4 },
          { title: "R for Data Science By Hadley Wickham", shelf: 4 },
          { title: "Learning R: A Step-by-Step Function Guide By Richard Cotton", shelf: 4 },
          { title: "IT Strategy and Management By Sanjiva Shankar Dubey", shelf: 5 },
          { title: "Design OF Transformaers By Dasgupta, Indrajit", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "006",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-006",
        books: [
          { title: "Success Mantra of Brhamhos By A. Sivathanu Pillai", shelf: 1 },
          { title: "Success Mantra of Brhamhos By A. Sivathanu Pillai", shelf: 2 },
          { title: "Network Analysis By G. K. Mithal", shelf: 3 },
          { title: "An Introduction to Data Structures with Application By Tremblay Jean-Paul", shelf: 4 },
          { title: "Integrated Electronics By Millman-Halkias", shelf: 4 },
          { title: "Integrated Electronics By Millman-Halkias", shelf: 5 },
          { title: "Integrated Electronics By Millman-Halkias", shelf: 6 },
        ],
      },
      b: {
        id: "B-006",
        books: [
          { title: "Mobile Cellular Telecommunications By William C y Lee", shelf: 1 },
          { title: "Mobile Cellular Telecommunications By William C y Lee", shelf: 2 },
          { title: "Mobile Cellular Telecommunications By William C y Lee", shelf: 3 },
          { title: "Mobile Cellular Telecommunications By K. Wesolowski", shelf: 3 },
          { title: "Fiber-optic communication systems By Govind P. Agrawal", shelf: 4 },
          { title: "Wireless and Mobile Communication ByT. G. Palanivelu", shelf: 4 },
          { title: "Fundamentals of Python By Kenneth Alfred Lambert", shelf: 4 },
          { title: "Intro to Wireless and Mobile Systems By Dharma Prakash Agrawal", shelf: 4 },
          { title: "Wireless Communications & Networks By William Stallings", shelf: 4 },
          { title: "Wireless Digital Communications By Kamilo Feher", shelf: 4 },
          { title: "Wireless Communications By ChidambaraNathan, P. Muthu", shelf: 4 },
          { title: "HTML 5 Black Book By Editorial Services", shelf: 4 },
          { title: "Neural Networks Fuzzy Logic and Genetic Algorithms By G. A. VIJAYALAKSHMI PAI", shelf: 5 },
          { title: "Object Oriented Programming with C++ By David Parsons", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "007",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-007",
        books: [
          { title: "Digital Image Processing By S Jayaraman", shelf: 1 },
          { title: "Electronic Circuits By J. S. Katre", shelf: 2 },
          { title: "Solid State Electronic Devices Book By Ben G. Streetman", shelf: 2 },
          { title: "Digital Ecectronic By Sanjay Sharma", shelf: 2 },
          { title: "Digital Ecectronic By J. S. Katre", shelf: 2 },
          { title: "Digital Ecectronic By S. Salivahnan", shelf: 2 },
          { title: "Advance Poser System By L. P. Singh", shelf: 2 },
          { title: "Digital Electronics ByW. H. Gothmann", shelf: 2 },
          { title: "Advanced Electronic Communications Systems By Wayne Tomasi", shelf: 3 },
          { title: "Digital Signal Processing By S. Salivahnan", shelf: 4 },
          { title: "Digital Signal Processing By S. Salivahnan", shelf: 5 },
          { title: "Digital Signal Processing By S. Salivahnan", shelf: 6 },
        ],
      },
      b: {
        id: "B-007",
        books: [
          { title: "Engineering Drawing By N. D. Bhatt", shelf: 1 },
          { title: "Engineering Drawing By N. D. Bhatt", shelf: 2 },
          { title: "Engineering Drawing By N. D. Bhatt", shelf: 3 },
          { title: "Engineering Drawing By N. D. Bhatt", shelf: 4 },
          { title: "Engineering Drawing By R. K. Dhawan", shelf: 5 },
          { title: "Engineering Drawing By N. D. Bhatt", shelf: 5 },
          { title: "Engineering Drawing By P. C. Gill", shelf: 6 },
          { title: "Basics of Engineering Drawing By A N Siddiqu", shelf: 6 },
          { title: "Engineering Drawing By Jolhe Dhananja", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "008",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-008",
        books: [
          { title: "Fundamentals of Python: First Programs Book By Kenneth Alfred Lambert", shelf: 1 },
          { title: "Digital Image Proccessing and Analysis By B. Chanda", shelf: 2 },
          { title: "Digital Image Processing By Rafael C. Gonzalez", shelf: 2 },
          { title: "Fundamental of Digital Image Proccessing MATLAV  By Robert J. Schilling", shelf: 2 },
          { title: "Digital Image Processing By P. Ramesh Babu", shelf: 2 },
          { title: "Digital Image Processing By J. S. Chitode", shelf: 2 },
          { title: "Signal and System By P. Ramesh Babu", shelf: 2 },
          { title: "Fundamental of Digital Image Proccessing MATLAV  By Robert J. Schilling", shelf: 2 },
          { title: "Digital Electronics & Logic Design By B. Somnath Nair", shelf: 2 },
          { title: "Introduction To Signals And Systems And Digital Signal Processing By M. N. Bandyopadhyay", shelf: 2 },
          { title: "Transmission Lines & Networks By Umesh Sinha", shelf: 3 },
          { title: "The Dynamics of Entrepreneurial Development and Management By  Vasant Desai", shelf: 5 },
          { title: "Electronic Circuits By Donald L. Schilling", shelf: 6 },
          { title: "Automatic Control Systems By Banjamin C. Kuo", shelf: 6 },
          { title: "Modern Control Engineering By Katsuhiko Ogata", shelf: 6 },
        ],
      },
      b: {
        id: "B-008",
        books: [
          { title: "Material Science By V. Rajendra", shelf: 1 },
          { title: "Materials Science for Electrical and Electronic Engineers By  Lan P. Jones", shelf: 1 },
          { title: "Materials Science and Engineering By V. Raghvan", shelf: 1 },
          { title: "Introductionto Engineering Material By B. K.  Agarwal", shelf: 1 },
          { title: "Electrical Engineering Material By S. P. Seth", shelf: 2 },
          { title: "Introduction to Embedded System By K. V. Shibhu", shelf: 2 },
          { title: "Operation & Control Power System By P. S. Murthy", shelf: 2 },
          { title: "Non-Conventional Energy Sources and Itilisation By R. K. Rajput", shelf: 2 },
          { title: "Energy Conservation and Management By Suresh Kumar Soni", shelf: 2 },
          { title: "Electromagnetic Waves and Radiating Systems By C. Jordan", shelf: 2 },
          { title: "Electric energy systems theory By Olle Ingemar Elgerd", shelf: 2 },
          { title: "T. B. Of Material Science By O. P. Khanna", shelf: 3 },
          { title: "T. B. Of Material Science By O. P. Khanna", shelf: 4 },
          { title: "Funcamental of DataBase System By Elmasri Navathe", shelf: 5 },
          { title: "C++ PrimerBy Barbara E. Moo, Josée Lajoie", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "009",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-009",
        books: [
          { title: "Basic Computer Engineerign By Dubey Sanjay Kumar", shelf: 1 },
          { title: "Basic Computer Engineerign By Sanjay Silakari", shelf: 2 },
          { title: "Fundamentals of Computers By V. Rajaraman", shelf: 3 },
          { title: "Principles of Soft Computing By S. N. Sivanandam", shelf: 4 },
          { title: "Principles of Computer Integrated Manufacturing By S. Kant Vajpayel", shelf: 5 },
          { title: "Electronic Eommunication Systems By George Kennedy", shelf: 6 },
        ],
      },
      b: {
        id: "B-009",
        books: [
          { title: "Funcamentals of Electerical Drives By Gopal K. Dubey", shelf: 1 },
          { title: "Electrical Machinery By S. P. Bimbhra", shelf: 2 },
          { title: "Electrical Machinery Design By A. K. Sawhney", shelf: 3 },
          { title: "Electrical Machinery Design By A. K. Sawhney", shelf: 4 },
          { title: "Electrical Machinery Design By A. K. Sawhney", shelf: 5 },
          { title: "Electrical Machinery Design By A. K. Sawhney", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "010",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-010",
        books: [
          { title: "Electrical Power Systems Quality By Roger C. Dugam", shelf: 1 },
          { title: "Basic Electroal Engineering By V. N. Mittle", shelf: 2 },
          { title: "Basic Electroal Engineering By V. N. Mittle", shelf: 3 },
          { title: "Basic Electroal Engineering By V. N. Mittle", shelf: 4 },
          { title: "Basic Electrical & Electronics Engineering By M. S. Sukhija", shelf: 5 },
          { title: "Basic Electroal Engineering By D. P. Kothari", shelf: 5 },
          { title: "Basic Electrical Engineering By J. J. Cathey", shelf: 6 },
          { title: "Basic Electrical Engineering By D. P. Kothari", shelf: 6 },
          { title: "Basic Electrical Engineering By V. K. Mehta", shelf: 6 },
        ],
      },
      b: {
        id: "B-010",
        books: [
          { title: "Business Correspondence & Report Writing By R. C. Sharma", shelf: 1 },
          { title: "Business Correspondence & Report Writing By R. C. Sharma", shelf: 2 },
          { title: "Business Correspondence & Report Writing By R. C. Sharma", shelf: 3 },
          { title: "Networks Liners & Fields By John D. Ryder", shelf: 4 },
          { title: "Networks Liners & Fields By John D. Ryder", shelf: 5 },
          { title: "Power Electronic By Md. H. Rashid", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "011",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-011",
        books: [
          { title: "Engineering Physics By R. K. Gupta", shelf: 1 },
          { title: "Engineering Physics By R. K. Gupta", shelf: 2 },
          { title: "Engineering Physics By R. K. Gupta", shelf: 3 },
          { title: "Engineering Physics By R. K. Gupta", shelf: 4 },
          { title: "Engineering Physics By R. K. Gupta", shelf: 5 },
          { title: "Engineering Physics By R. K. Gupta", shelf: 6 },
        ],
      },
      b: {
        id: "B-011",
        books: [
          { title: "Generalized Theory of Electrical Machines By P. S. Bimbhra", shelf: 1 },
          { title: "Generalized Theory of Electrical Machines By P. S. Bimbhra", shelf: 2 },
          { title: "EHV-AC-HVDC Transmission Distribution Engineering By S. Rao", shelf: 3 },
          { title: "EHV-AC-HVDC Transmission Distribution Engineering By S. Rao", shelf: 4 },
          { title: "Power System Stability & Control By Prabha Kundur", shelf: 5 },
          { title: "Power System Stability & Control By Prabha Kundur", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "012",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-012",
        books: [
          { title: "Basic Engineering Physics By M. N. Avadhnulu", shelf: 1 },
          { title: "Physics By K. C. Nandi", shelf: 2 },
          { title: "Engineering Physics By S. K. Vijay", shelf: 2 },
          { title: "Engineering Physics By Navneet Gupta", shelf: 3 },
          { title: "Engineering Physics By Navneet Gupta", shelf: 4 },
          { title: "T. B. of Engineering Physics By M. N. Avadhnulu", shelf: 5 },
          { title: "Concepts in Eingineering Design By Ashok Kumar Gupta", shelf: 6 },
          { title: "Concepts in Eingineering Design By Ashok Kumar Gupta", shelf: 6 },
        ],
      },
      b: {
        id: "B-012",
        books: [
          { title: "Engineering Mathematics By D. C. Agrawal", shelf: 1 },
          { title: "Engineering Mathematics By D. C. Agrawal", shelf: 2 },
          { title: "Engineering Mathematics By D. C. Agrawal", shelf: 3 },
          { title: "Engineering Mathematics By D. C. Agrawal", shelf: 4 },
          { title: "Engineering Mathematics By D. C. Agrawal", shelf: 6 },
          { title: "Engineering Mathematics By D. K. Jain", shelf: 6 },
          { title: "Engineering Mathematics By Sonendra Gupta", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "013",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-013",
        books: [
          { title: "Higher Engineering Mathematics By B. S. Grewal", shelf: 1 },
          { title: "Higher Engineering Mathematics By B. S. Grewal", shelf: 2 },
          { title: "Higher Engineering Mathematics By B. S. Grewal", shelf: 3 },
          { title: "Higher Engineering Mathematics By B. S. Grewal", shelf: 4 },
          { title: "Higher Engineering Mathematics By B. V. Ramana", shelf: 5 },
          { title: "Higher Engineering Mathematics By B. V. Ramana", shelf: 6 },
        ],
      },
      b: {
        id: "B-013",
        books: [
          { title: "Basic of Engineering Chemistry By S. S. Dara", shelf: 1 },
          { title: "Engineering Chemistry By Preeti Jain", shelf: 1 },
          { title: "Engineering Chemistry By P. C. Jain", shelf: 2 },
          { title: "Engineering Chemistry By P. C. Jain", shelf: 3 },
          { title: "Engineering Chemistry By Shashi Chawla", shelf: 4 },
          { title: "Engineering Chemistry By Shashi Chawla", shelf: 5 },
          { title: "T. B. Environmental Chemistry & Pollution Control By S. S. Dara", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "014",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-014",
        books: [
          { title: "Engineering Mathematics By Sonendra Gupta", shelf: 1 },
          { title: "3000 Solved Problems in Calculus By Elliott Mendelson", shelf: 2 },
          { title: "2000 Solved Problems in Discrete Mathematics By Seymour Lipschut", shelf: 2 },
          { title: "Engineering Mathematics By Jyoti Bajapai", shelf: 3 },
          { title: "Basic Engineering Mathematics By H. K. Dass", shelf: 4 },
          { title: "T.B. Engineering Mathematics By N. P. Bali", shelf: 5 },
          { title: "Design of Electrical Machines By V. N. Mittle", shelf: 5 },
          { title: "Design Data BY G. R. Domodaran", shelf: 6 },
        ],
      },
      b: {
        id: "B-014",
        books: [
          { title: "Op-Amps and Linear Integrated Circuits By Ramakant A. Gayakwad", shelf: 1 },
          { title: "Getting Started With MATLAB7 By Rudra Pratap", shelf: 2 },
          { title: "Switching and Finite Automata Theory By ZVI Koham", shelf: 3 },
          { title: "Switching and Finite Automata Theory By ZVI Koham", shelf: 4 },
          { title: "Microprocessor Architecture Prog. & Applications with the 8085 By Ramesh Gaonkar", shelf: 5 },
          { title: "Satellite Communication Systems Engineering By Wilbur L. Pritchard", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "015",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-015",
        books: [
          { title: "Eneineering Mathematics - III By N. P. Bali", shelf: 1 },
          { title: "Eneineering Mathematics - III By H. K. Dass", shelf: 1 },
          { title: "Eneineering Mathematics - III By Vijay Gupta", shelf: 1 },
          { title: "Eneineering Mathematics - III By Sonendra Gupta", shelf: 1 },
          { title: "Eneineering Mathematics - III By B. C. Agrawal", shelf: 2 },
          { title: "Eneineering Mathematics - III By B. C. Agrawal", shelf: 3 },
          { title: "Eneineering Mathematics - III By B. C. Agrawal", shelf: 4 },
          { title: "Eneineering Mathematics - III By B. C. Agrawal", shelf: 5 },
          { title: "Eneineering Mathematics - III By B. C. Agrawal", shelf: 6 },
        ],
      },
      b: {
        id: "B-015",
        books: [
          { title: "Engineering Machanics By K. L. Kumar", shelf: 1 },
          { title: "Engineering Machanics By K. L. Kumar", shelf: 2 },
          { title: "T. B. of Engineering Machanics By R. S. Kumar", shelf: 3 },
          { title: "T. B. of Engineering Machanics By R. S. Kumar", shelf: 4 },
          { title: "Engineering Machanics By R. S. Khurmi", shelf: 5 },
          { title: "Engineering Machanics By S. Ramamrutham", shelf: 5 },
          { title: "Engineering Machanics By  I H Shames", shelf: 5 },
          { title: "Engineering Machanics By  D. S. Kumar", shelf: 6 },
          { title: "Engineering Machanics By R. K. Rajput", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "016",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-016",
        books: [
          { title: "Engineering Mathematics -II By Ashok Ganguly", shelf: 1 },
          { title: "Engineering Mathematics -II By P. P. Gupta", shelf: 1 },
          { title: "Engineering Mathematics -II By Manish Goyal", shelf: 1 },
          { title: "Engineering Mathematics -II By D. C. Agrawal", shelf: 2 },
          { title: "Engineering Mathematics -II By D. C. Agrawal", shelf: 3 },
          { title: "Telecommunication Switching Systems and Networks By T. Viswanathan", shelf: 4 },
          { title: "Telecommunication Switching Systems and Networks By T. Viswanathan", shelf: 5 },
          { title: "Power System Protection and Switchgear By Badri Ram", shelf: 6 },
        ],
      },
      b: {
        id: "B-016",
        books: [
          { title: "Thinking in C++ By Bruce Eckel", shelf: 1 },
          { title: "Thinking in C++ By Bruce Eckel", shelf: 2 },
          { title: "Satellite Communication By Roddy Dennis", shelf: 3 },
          { title: "Electric Machines By Ashfaq Husain", shelf: 4 },
          { title: "Electric Machines By Ashfaq Husain", shelf: 5 },
          { title: "ADO.NET By Michaed Othey", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "017",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-017",
        books: [
          { title: "Programming with Java By E. Balagurusamy", shelf: 1 },
          { title: "C++ Without Fear By Brian Overland", shelf: 2 },
          { title: "Introduction to Electrodynamics By David J. Griffiths", shelf: 2 },
          { title: "Microprocessors & Interfacing By Douglas V. Hall", shelf: 3 },
          { title: "Design of The UNIX Operationg System By Marice J. Bach", shelf: 4 },
          { title: "Principles of Electronics By V. K. Mehta", shelf: 5 },
          { title: "Principles of Electronics By B. L. Thareja", shelf: 6 },
        ],
      },
      b: {
        id: "B-017",
        books: [
          { title: "A Course in Electrical & Electronic Measurements & Instrumentation By A. K. Swhney", shelf: 1 },
          { title: "A Course in Electrical & Electronic Measurements & Instrumentation By A. K. Swhney", shelf: 2 },
          { title: "A Course in Electrical & Electronic Measurements & Instrumentation By A. K. Swhney", shelf: 3 },
          { title: "A Course in Electrical & Electronic Measurements & Instrumentation By A. K. Swhney", shelf: 4 },
          { title: "A Course in Electrical & Electronic Measurements & Instrumentation By A. K. Swhney", shelf: 5 },
          { title: "A Course in Electrical & Electronic Measurements & Instrumentation By A. K. Swhney", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "018",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-018",
        books: [
          { title: "Wireless Communication By T. S. Rappaport", shelf: 1 },
          { title: "Fundamental of Database System By Elmasri", shelf: 2 },
          { title: "An Introduction to Database System By Date", shelf: 3 },
          { title: "An Introduction to Database System By Majumadar", shelf: 3 },
          { title: "ASP.NET: The Complete Reference By Matthew MacDonald", shelf: 4 },
          { title: "Digital Image Processing By S Jayaraman", shelf: 5 },
          { title: "Computer Fundamental By D. P. Nagpal", shelf: 6 },
          { title: "Programming With C By Byron S. Gottfried", shelf: 6 },
        ],
      },
      b: {
        id: "B-018",
        books: [
          { title: "Fundamental of Turbo Machinery By B. K. Vankanna", shelf: 1 },
          { title: "A Course in Electrical & Electronic Measurements & Instrumentation By A. K. Swhney", shelf: 2 },
          { title: "Liner Control Systems BY B. S. Manke", shelf: 3 },
          { title: "Communication Systems By R. P. Singh", shelf: 4 },
          { title: "Communication Systems By R. P. Singh", shelf: 5 },
          { title: "Communication Systems By R. P. Singh", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "019",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-019",
        books: [
          { title: "Computer System Architecture By M. Morris Mano", shelf: 1 },
          { title: "Computer System Architecture By M. Morris Mano", shelf: 2 },
          { title: "Computer System Architecture By M. Morris Mano", shelf: 3 },
          { title: "Fundamental of Computer Algorithms By Ellis Horowitz", shelf: 3 },
          { title: "A Practical Approach Cloud Computing By A. R. Velte", shelf: 4 },
          { title: "Operating System By Abraham Siberschatz", shelf: 4 },
          { title: "Operating System By William Stallngs", shelf: 4 },
          { title: "Cloud Computing By Daniel Kirsch", shelf: 4 },
          { title: "Data & Computer Communications By William Stallings", shelf: 5 },
          { title: "Operating System By Tenenbaum", shelf: 5 },
          { title: "Computer Network By Andrew S. Tanenbaum", shelf: 6 },
          { title: "Computer Network and Internet By Dougles E Comer", shelf: 6 },
        ],
      },
      b: {
        id: "B-019",
        books: [],
      },
    },
  },
  {
    id: "020",
    subject: "ENGINEERING",
    subAlmirahs: {
      a: {
        id: "A-020",
        books: [
          { title: "Anatennas Wave Propagation By K. D. Prasad", shelf: 1 },
          { title: "Anatennas Wave Propagation By K. D. Prasad", shelf: 2 },
          { title: "Anatennas Wave Propagation By K. D. Prasad", shelf: 3 },
          { title: "Anatennas Wave Propagation By K. D. Prasad", shelf: 4 },
          { title: "Anatennas Wave Propagation By K. D. Prasad", shelf: 5 },
          { title: "Introduction to Electrodynamics By David Griffiths", shelf: 6 },
          { title: "C++ Without Fear By Brian Overland", shelf: 6 },
        ],
      },
      b: {
        id: "B-020",
        books: [],
      },
    },
  },
  {
    id: "041",
    subject: "AGRICULTURE",
    subAlmirahs: {
      a: {
        id: "A-041",
        books: [
          { title: "Agriculture Heritage By S. R. Reddy", shelf: 1 },
          { title: "Agriculture Heritage By S. R. Reddy", shelf: 2 },
          { title: "Comprehension & Communication Skills Engineering By V. Kumar", shelf: 3 },
          { title: "Plant Biochemistry & Biotechnology By N. K. Gupta", shelf: 3 },
          { title: "Plant Biochemistry & Biotechnology By N. K. Gupta", shelf: 4 },
          { title: "Fundamentals of Horticulture By Jitendra Singh", shelf: 5 },
          { title: "Principles of Agronomy By S. R. Reddy", shelf: 6 },
        ],
      },
      b: {
        id: "B-041",
        books: [
          { title: "Plant Biotechnology By B. D. Singh", shelf: 1 },
          { title: "Fundamentals of Agriculture By S. D. Singh", shelf: 2 },
          { title: "HandBook of Agriculture Science By S. S. Singh", shelf: 3 },
          { title: "Plant Pathology By R. P. Singh", shelf: 3 },
          { title: "Problematic Soils And Their Management BY Dilip Ku. Das", shelf: 4 },
          { title: "Introduction to Cytogenetics By Ganesh Prasad", shelf: 4 },
          { title: "Farm Machinery & Power By O.P. SINGHAL", shelf: 5 },
          { title: "Introductory Agrometeorology and Climate Chamge By S. R. Reddy", shelf: 5 },
          { title: "Agronomy By S. C. Telkar", shelf: 6 },
          { title: "Environmental Studies For Undergraduate Courses By Eralh Barucha", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "042",
    subject: "AGRICULTURE",
    subAlmirahs: {
      a: {
        id: "A-042",
        books: [
          { title: "Funda. Of Plant Biochemistry & Biotechnology By Rajan Katoch", shelf: 1 },
          { title: "T.B. of Agriculture Communication By A. S.  Sandhu", shelf: 1 },
          { title: "Fundamentals of Forestry By Pranay Ku. Roy Barman", shelf: 2 },
          { title: "Breeding Field Crops By David Allen", shelf: 3 },
          { title: "T.B. of Biotechnology By R. C. Dubey", shelf: 3 },
          { title: "T. B. of Human Values of Ethics By Deba Brata Basu", shelf: 4 },
          { title: "Livestock Production & Management By S. G. Sukla", shelf: 5 },
          { title: "T.B. of Entomology By Mathur", shelf: 5 },
          { title: "T. B. of Rulal Developmant Entrepeneurship & Communication Skills By S. Mondal", shelf: 6 },
          { title: "Genetics. By Strickberger", shelf: 6 },
        ],
      },
      b: {
        id: "B-042",
        books: [
          { title: "Introduction Soil Science BY D. K. Das", shelf: 1 },
          { title: "Introduction Soil Science BY D. K. Das", shelf: 2 },
          { title: "Introduction Soil Science BY D. K. Das", shelf: 3 },
          { title: "Fund. Of Agriculture By K. P. Singh", shelf: 4 },
          { title: "Introduction to Soil and Water Conservation Engineering By Bimal Chandramal", shelf: 5 },
          { title: "Fundamentals Of Manures And Fertilizers. By P. C. Das", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "043",
    subject: "AGRICULTURE",
    subAlmirahs: {
      a: {
        id: "A-043",
        books: [
          { title: "Introduction to Forestry By S. S. Sagwal", shelf: 1 },
          { title: "Introduction to Forestry By S. S. Sagwal", shelf: 2 },
          { title: "T.B of Applied Entromology-II By Gursharan Singh", shelf: 3 },
          { title: "A TextBook of Applied Entomology By K. P. Srivastava", shelf: 3 },
          { title: "Diseases of Crop Plants in India By G. Rangaswami", shelf: 3 },
          { title: "Statistics for Agricultural Sciences : G Nageswara Rao", shelf: 4 },
          { title: "Integrated Pest Management Concepts By Ramesh Arora, & Gs Dhaliwal", shelf: 4 },
          { title: "Introduction to Forestry By S. R. Reddy", shelf: 5 },
          { title: "Plant Breeding By B. D. Singh", shelf: 6 },
          { title: "Plant Breeding By Phundan Singh", shelf: 6 },
        ],
      },
      b: {
        id: "B-043",
        books: [
          { title: "Soil Fertility & Fertilizers By John L. Havlin", shelf: 1 },
          { title: "Geoinformatics and Nanotechnology for Precision Farming By S. R. Reddy", shelf: 1 },
          { title: "Computer Fundamentals & Programming In C By Pradip Dey", shelf: 1 },
          { title: "T. B. of Livestock Production Management By V. N. Gautam", shelf: 2 },
          { title: "Essentials of Farm Financial Management By S. S. Johl", shelf: 2 },
          { title: "T.B. of Oleri & Flori Culture By G. S. Saini", shelf: 3 },
          { title: "Fundamentls Of Biochemistry By Jain, J. L.", shelf: 3 },
          { title: "Agriculture Economics By S. Subha Reddy", shelf: 4 },
          { title: "T. B. of Agriculture Engineering By Jagdishwar Sahay", shelf: 5 },
          { title: "Yog Darshan By Geeta Press", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "044",
    subject: "AGRICULTURE",
    subAlmirahs: {
      a: {
        id: "A-044",
        books: [
          { title: "Introductory Biology By P. K. Sehgal", shelf: 1 },
          { title: "Introductory Biology By P. K. Sehgal", shelf: 2 },
          { title: "Introductory Biology By P. K. Sehgal", shelf: 3 },
          { title: "Introductory Biology By P. K. Sehgal", shelf: 4 },
          { title: "Introductory Biology By P. K. Sehgal", shelf: 5 },
          { title: "Introduction to Soil Science By S. Mohandas", shelf: 6 },
        ],
      },
      b: {
        id: "B-044",
        books: [
          { title: "Principles of Agronomy By T Yellamanda Reddy", shelf: 1 },
          { title: "Principles of Agronomy By T Yellamanda Reddy", shelf: 2 },
          { title: "Instant Horticulture By S. N. Gupta", shelf: 3 },
          { title: "Objective Agrculture Economics By K. Nirmal Ravi Kumar", shelf: 4 },
          { title: "Extension Communication & Management By G. L. Ray", shelf: 5 },
          { title: "Modern Techniques of Raising Field Crops By Chhidda Singh", shelf: 5 },
          { title: "ELEMENTS OF GENETICS by Phundan Singh", shelf: 6 },
          { title: "Plant Disease By R. S. Singh", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "045",
    subject: "AGRICULTURE",
    subAlmirahs: {
      a: {
        id: "A-045",
        books: [
          { title: "Fund. Of Genetics By Omkar Singh", shelf: 1 },
          { title: "Fund. Of Crop Physiology By Omkar Singh", shelf: 1 },
          { title: "Introductory Biology By Pratap Singh", shelf: 1 },
          { title: "Vegetable Praduction By G. S. Sani", shelf: 2 },
          { title: "Rural Sociology & Educational Phychology By B. D. Tyagi", shelf: 2 },
          { title: "Plant Biotechnology By H. R. Dagla", shelf: 2 },
          { title: "Human Values & Ethics By D. K. Sharma", shelf: 2 },
          { title: "Farm Structure Power & Machinery By Randhawa Chouhan", shelf: 3 },
          { title: "Introductiory Biology By Jay Sharma", shelf: 3 },
          { title: "Fund. Of Agronomy By I. P. S. Ahalawat", shelf: 3 },
          { title: "Cro Improvement By Rajendra Ku. Yadav", shelf: 3 },
          { title: "Livestock Production & Management By Indrajeet Jouhar", shelf: 4 },
          { title: "NSS/NCC/Physical Education & Yoga Practices By Kaptan P. K. Shamra", shelf: 4 },
          { title: "Elementary Mathematics By R. Singh", shelf: 4 },
          { title: "Principles of Genetics & Plant Breeding By Omkar Singh", shelf: 5 },
          { title: "Plant Pathology By V. P. Singh", shelf: 5 },
          { title: "Agricultural Entomology By Yoges Kumar Mathur", shelf: 6 },
          { title: "Mulik Mrida Vigyan By Sharma, N. L.", shelf: 6 },
        ],
      },
      b: {
        id: "B-045",
        books: [
          { title: "Intrepreneurship Development & Business Communication With Practscal Work By Saru Narayan", shelf: 1 },
          { title: "Udhyaniki ke Moolbhoot Siddhant By Dubey, K. N.", shelf: 1 },
          { title: "Agricultural Heritage By Subadh Kumar", shelf: 2 },
          { title: "Livestock & Poultry Management By Dabes Gupta", shelf: 2 },
          { title: "Introductory Forestry By Vijay Ku. Umrab", shelf: 3 },
          { title: "Pasts of Crops & Stored Grains & Their Managaement By Krishn Datt Upadhya", shelf: 3 },
          { title: "Fundamentals of Plant Biochemistry & Biotechnology By Omkar Singh", shelf: 4 },
          { title: "Agricultural Microbiology By Omkar Singh", shelf: 4 },
          { title: "Fundamentals of Agriculture Economics By Silpi Jain", shelf: 5 },
          { title: "Fundamentals of Soil Science By N. L. Sharma", shelf: 5 },
        ],
      },
    },
  },
  {
    id: "046",
    subject: "AGRICULTURE",
    subAlmirahs: {
      a: {
        id: "A-046",
        books: [
          { title: "Intellectual Property Rights By Neeraj Pandey", shelf: 1 },
          { title: "Model Question Bank A to Z Fisheries By Pandey, P. K.", shelf: 1 },
          { title: "Freshwater Aquaculture By Rath, Rajendra Kumar", shelf: 1 },
          { title: "Management and Entrepreneurship By N. V. R. Naidu", shelf: 1 },
          { title: "Principles & Practices of Agronomy By S. S. Singh", shelf: 2 },
          { title: "CROP Improvement-I (Kharif Crops) By Yadav, Rajendra Kumar", shelf: 2 },
          { title: "Breeding Field Crops By David Allen Slepar", shelf: 2 },
          { title: "Introduction to Environmental Science By Y. Anjaneyulu", shelf: 3 },
          { title: "Textbook of Integrated Pest Management By Dhaliwal, G. S.", shelf: 3 },
          { title: "Micropropagation ( Technology & Application) By P. C. Debergh", shelf: 3 },
          { title: "Agriculture Insect Pests and Their Control By V. B. Awasthi", shelf: 4 },
          { title: "Model Question Bank Fisheries By Rathnakumar, K.", shelf: 4 },
          { title: "Practical Handbook of Gentics By Vikas Pali", shelf: 4 },
          { title: "Modern Technology in Vegetable Production By Pranab Hazra", shelf: 5 },
          { title: "Practical Manual on Introductory Biology By Mithlesh Kumar", shelf: 6 },
          { title: "T.B. on Agri-Informatics By Amit A. Degirikar", shelf: 6 },
        ],
      },
      b: {
        id: "B-046",
        books: [
          { title: "Introduction to Principles of Plant Pathology By R. S. Singh", shelf: 1 },
          { title: "Principles of Agricultural Meteorology By B. M. Mote", shelf: 1 },
          { title: "Practical Manual of Crop Improvement-I By Rajendra Ku. Yadav", shelf: 2 },
          { title: "Handbook of Entomology By Prasad, T. V.", shelf: 2 },
          { title: "Practical Manual on Crop Improvement-II By Rajendra Ku. Yadav", shelf: 2 },
          { title: "T.B of Sericulture Apiculture and Entomology By P. K. Sehgal", shelf: 3 },
          { title: "Fundamentals of Prochemistry By J. K. Jain", shelf: 3 },
          { title: "T.B. of Rural Sociology Educational Psychology By R. Velusamy", shelf: 4 },
          { title: "Diseases of Fruit Crops By R. S. Singh", shelf: 5 },
          { title: "Vegetable Crops Breeding and Seed Production Vol - I By Fageria, M. S.", shelf: 5 },
          { title: "T.B. of Agricultural Extension By Sagar Mondal", shelf: 6 },
          { title: "Basic Horticulture By Singh, Jitendra", shelf: 6 },
        ],
      },
    },
  },
  {
    id: "047",
    subject: "AGRICULTURE",
    subAlmirahs: {
      a: {
        id: "A-047",
        books: [
          { title: 'Molik Padap Prajnan  (Fund. of Plant Breeding) By Singh, Bramha', shelf: 1 },
          { title: 'Krashi Keet Vigyan (Agriculture Entomology) By Mathur, Yogesh Kumar', shelf: 2 },
          { title: 'Gramin Samaj Shastra Avam Shaikshaik Manovigyan By Tyagi, B. D.', shelf: 3 },
          { title: 'Sabjion Ki Unnat Kheti Evem Podh Sanrakshan Tatha Sabjion Ki Tudhai By Prashad, V. M.', shelf: 3 },
        ],
      },
      b: {
        id: "B-047",
        books: [],
      },
    },
  },
  {
    id: "048",
    subject: "AGRICULTURE",
    subAlmirahs: {
      a: {
        id: "A-048",
        books: [
          { title: 'Dimensions of Agricultural Extension By Singh, A. K.', shelf: 1 },
          { title: 'CROP Improvement-I (Kharif Crops) By Singh, Omkar', shelf: 2 },
          { title: 'Introductory Rural Sociology  By Chitambar, J. B.', shelf: 2 },
          { title: 'Textbook of Entomology By Mathur, Y. K.', shelf: 3 },
          { title: 'Foods Facts and Principles By Manay, N. Shakuntala', shelf: 4 },
          { title: 'Textbook of Fish Biology and Fisheries By Khanna, S. S.', shelf: 5 },
          { title: 'Fundamentals of Manures and Fertilizers By Das, Provash Chandra', shelf: 6 },
        ],
      },
      b: {
        id: "B-048",
        books: [
          { title: 'Glaustas Horticulture By Muthukumar, P.', shelf: 1 },
          { title: 'Plant Biotechnology By Slater, Adrian', shelf: 2 },
        ],
      },
    },
  },
];
