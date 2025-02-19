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

    subject: "Engineering",

    subAlmirahs: {

      a: {

        id: "A-001",

        books: [

          { title: "Digital image Processing and Computer Vision By Sonka, Milan", shelf: 1 },

          { title: "Theory of Machines By S. S. Ratan", shelf: 1 },

          { title: "Concept of Programming Languages  By Robert W. Sebesta", shelf: 2 },

          { title: "Theory of Machines By R. S. Khurmi", shelf: 3 },

          { title: "Theory of Machines By R. S. Khurmi", shelf: 4 },

          { title: "Theory of Machines By R. S. Khurmi", shelf: 5 },

          { title: "IT for Librarians By Ansari, K. Ravindran", shelf: 6 }

        ]

      },

      b: {

        id: "B-001",

        books: [

          { title: "Data Structures By Seymour Lipschut", shelf: 1 },

          { title: "Data Structures By Seymour Lipschut", shelf: 2 },

          { title: "Data Structures By Seymour Lipschut", shelf: 3 },

          { title: "Advanced Computer Architecture by Kai Hwang", shelf: 4 },

          { title: "Concepts in Engineering Design By R. K. Gupta", shelf: 5 },

          { title: "Concepts in Engineering Design By R. K. Gupta", shelf: 6 }

        ]

      }

    }

  },

  {

    id: "002",

    subject: "Engineering",

    subAlmirahs: {

      a: {

        id: "A-002",

        books: [

          { title: "Thermal Engineering By R. K. Rajput", shelf: 1 },

          { title: "Linear Integrated Circuits by Roy Choudhary", shelf: 2 },

          { title: "T. B. of Thermal Engineering K. S. Khurmi", shelf: 3 },

          { title: "Electromagnetic Waves And Radiating Systems By Edward C. Jordan", shelf: 4 },

          { title: "Object Oriented Modeling and Design with UML by Michael Blaha", shelf: 5 },

          { title: "Monochrome and Colour Television By R. R. Gulati", shelf: 6 }

        ]

      },

      b: {

        id: "B-002",

        books: [

          { title: "Textbook of Fluid Mechanics and Hydraulic Machines By  RK Rajput", shelf: 1 },

          { title: "Circuit Theory By A. Chakrabarti", shelf: 2 },

          { title: "Circuit Theory By A. Chakrabarti", shelf: 3 },

          { title: "Circuit Theory By A. Chakrabarti", shelf: 4 },

          { title: "Circuit Theory By A. Chakrabarti", shelf: 5 },

          { title: "Circuit Theory By A. Chakrabarti", shelf: 6 }

        ]

      }

    }

  },

  {

    id: "003",

    subject: "Engineering",

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

          { title: "Monochrome and Colour Television By R. K. Gulati", shelf: 6 }

        ]

      },

      b: {

        id: "B-003",

        books: [

          { title: "Programming in Visual Basic 6.0 By Bradley Julia", shelf: 1 },

          { title: "Programming in Visual Basic 6.0 By Bradley Julia", shelf: 2 },

          { title: "Programming in Visual Basic 6.0 By Bradley Julia", shelf: 3 },

          { title: "Introduction to Unix and Shell Programming By M. G. Ventca", shelf: 3 },

          { title: "Object-Oriented Programming with C++ By E. Balagurusamy", shelf: 4 },

          { title: "Object-Oriented Programming with C++ By E. Balagurusamy", shelf: 5 },

          { title: "Principles of Programming Language By Rajiv Chopra", shelf: 6 },

          { title: "Programming Language By Pratt W. Terrace", shelf: 6 }

        ]

      }

    }

  },

  {

    id: "004",

    subject: "Engineering",

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

          { title: "Information Storage & Management By Pankaj Sharma", shelf: 6 }

        ]

      },

      b: {

        id: "B-004",

        books: [

          { title: "A Textbook of Fluid Mechanics and Hydraulic Machines By R. K. Bansal", shelf: 1 },

          { title: "Microprocessors and Microcontrollers By Kani, A. Nagoor", shelf: 2 },

          { title: "Digital Design By John K. Wakerly", shelf: 3 },

          { title: "Fundamental of Electronic Engineering By Akhilesh K. Upadhyay", shelf: 3 },

          { title: "Introduction to Nanoscience and Nanotechnology By Chattopadhyay K.K", shelf: 3 },

          { title: "CMOS VLS Design By Neil H. E. Weste", shelf: 4 },

          { title: "Problems in Operations Research By Prem Kumar Gupta", shelf: 5 },

          { title: "Problems in Operations Research By Prem Kumar Gupta", shelf: 6 }

        ]

      }

    }

  },

  {

    id: "005",

    subject: "Engineering",

    subAlmirahs: {

      a: {

        id: "A-005",

        books: [

          { title: "Network Analysis By G. K. Mittal", shelf: 1 },

          { title: "Network Analysis By G. K. Mittal", shelf: 2 },

          { title: "Network Analysis By Van Valkenbury", shelf: 3 },

          { title: "Network Analysis By Van Valkenbury", shelf: 4 },

          { title: "Network Analysis By G. K. Mithal", shelf: 5 },

          { title: "Network Analysis By G. K. Mithal", shelf: 6 }

        ]

      },

      b: {

        id: "B-005",

        books: [

          { title: "Optical Fiber Communication By Gerd Keiser", shelf: 1 },

          { title: "Optical Fiber Communication By Gerd Keiser", shelf: 2 },

          { title: "Utilization of Electric Power & Electric Traction By  J.B. Gupta", shelf: 3 },

          { title: "Entrepreneurship By David H. Hat", shelf: 4 },

          { title: "IT Strategy and Management By Sanjiva Shankar Dubey", shelf: 5 },

          { title: "Design OF Transformaers By Dasgupta, Indrajit", shelf: 6 }

        ]

      }

    }

  },

  {

    id: "006",

    subject: "Engineering",

    subAlmirahs: {

      a: {

        id: "A-006",

        books: [

          { title: "Success Mantra of Brhamhos By A. Sivathanu Pillai", shelf: 1 },

          { title: "Success Mantra of Brhamhos By A. Sivathanu Pillai", shelf: 2 },

          { title: "Network Analysis By G. K. Mithal", shelf: 3 },

          { title: "An Introduction to Data Structures with Application By Tremblay Jean-Paul", shelf: 4 },

          { title: "Integrated Electronics By Millman-Halkias", shelf: 5 },

          { title: "Integrated Electronics By Millman-Halkias", shelf: 6 }

        ]

      },

      b: {

        id: "B-006",

        books: [

          { title: "Mobile Cellular Telecommunications By William C y Lee", shelf: 1 },

          { title: "Mobile Cellular Telecommunications By William C y Lee", shelf: 2 },

          { title: "Mobile Cellular Telecommunications By William C y Lee", shelf: 3 },

          { title: "Fiber-optic communication systems By Govind P. Agrawal", shelf: 4 },

          { title: "Wireless and Mobile Communication By T. G. Palanivelu", shelf: 4 },

          { title: "Fundamentals of Python By Kenneth Alfred Lambert", shelf: 4 },

          { title: "Intro to Wireless and Mobile Systems By Dharma Prakash Agrawal", shelf: 4 },

          { title: "Wireless Communications & Networks By William Stallings", shelf: 4 },

          { title: "Wireless Digital Communications By Kamilo Feher", shelf: 4 },

          { title: "Wireless Communications By ChidambaraNathan, P. Muthu", shelf: 4 },

          { title: "HTML 5 Black Book By Editorial Services", shelf: 4 },

          { title: "Neural Networks Fuzzy Logic and Genetic Algorithms By G. A. VIJAYALAKSHMI PAI", shelf: 5 },

          { title: "Object Oriented Programming with C++ By David Parsons", shelf: 6 }

        ]

      }

    }

  },

  {

    id: "007",

    subject: "Engineering",

    subAlmirahs: {

      a: {

        id: "A-007",

        books: [

          { title: "Digital Image Processing By S Jayaraman", shelf: 1 },

          { title: "Electronic Circuits By J. S. Katre", shelf: 2 },

          { title: "Solid State Electronic Devices Book By Ben G. Streetman", shelf: 2 },

          { title: "Digital Electronic By Sanjay Sharma", shelf: 2 },

          { title: "Digital Electronic By J. S. Katre", shelf: 2 },

          { title: "Digital Electronic By S. Salivahnan", shelf: 2 },

          { title: "Advance Poser System By L. P. Singh", shelf: 2 },

          { title: "Digital Electronics By W. H. Gothmann", shelf: 2 },

          { title: "Advanced Electronic Communications Systems By Wayne Tomasi", shelf: 3 },

          { title: "Digital Signal Processing By S. Salivahnan", shelf: 4 },

          { title: "Digital Signal Processing By S. Salivahnan", shelf: 5 },

          { title: "Digital Signal Processing By S. Salivahnan", shelf: 6 }

        ]

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

          { title: "Engineering Drawing By Jolhe Dhananja", shelf: 6 }

        ]

      }

    }

  },

  {

    id: "008",

    subject: "Engineering",

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

          { title: "Transmission Lines & Networks By Umesh Sinha", shelf: 3 },

          { title: "T. B. Of Material Science By O. P. Khanna", shelf: 3 },

          { title: "T. B. Of Material Science By O. P. Khanna", shelf: 4 },

          { title: "The Dynamics of Entrepreneurial Development and Management By  Vasant Desai", shelf: 5 },

          { title: "Electronic Circuits By Donald L. Schilling", shelf: 6 },

          { title: "Automatic Control Systems By Banjamin C. Kuo", shelf: 6 },

          { title: "Modern Control Engineering By Katsuhiko Ogata", shelf: 6 }

        ]

      },

      b: {

        id: "B-008",

        books: [

          { title: "Electronic Circuits By Donald L. Schilling", shelf: 1 },

          { title: "C++ PrimerBy Barbara E. Moo, Josée Lajoie", shelf: 6 }

        ]

      }

    }

  },

  {

    id: "009",

    subject: "Engineering",

    subAlmirahs: {

      a: {

        id: "A-009",

        books: [

          { title: "Basic Computer Engineering By Dubey Sanjay Kumar", shelf: 1 },

          { title: "Fundamentals of Electrical Drives By Gopal K. Dubey", shelf: 1 },

          { title: "Basic Computer Engineering By Sanjay Silakari", shelf: 2 },

          { title: "Electrical Machinery By S. P. Bimbhra", shelf: 2 },

          { title: "Fundamentals of Computers By V. Rajaraman", shelf: 3 },

          { title: "Electrical Machinery Design By A. K. Sawhney", shelf: 3 },

          { title: "Principles of Soft Computing By S. N. Sivanandam", shelf: 4 },

          { title: "Electrical Machinery Design By A. K. Sawhney", shelf: 4 },

          { title: "Electrical Machinery Design By A. K. Sawhney", shelf: 5 },

          { title: "Electronic Communication Systems By George Kennedy", shelf: 6 },

          { title: "Electrical Machinery Design By A. K. Sawhney", shelf: 6 }

        ]

      },

      b: {

        id: "B-009",

        books: []

      }

    }

  },

  {

    id: "010",

    subject: "Engineering",

    subAlmirahs: {

      a: {

        id: "A-010",

        books: [

          { title: "Electrical Power Systems Quality By Roger C. Dugam", shelf: 1 },

          { title: "Basic Electroal Engineering By V. N. Mittle", shelf: 2 },

          { title: "Basic Electroal Engineering By V. N. Mittle", shelf: 3 },

          { title: "Basic Electroal Engineering By V. N. Mittle", shelf: 4 },

          { title: "Basic Electrical & Electronics Engineering By M. S. Sukhija", shelf: 5 },

          { title: "Basic Electrical Engineering By J. J. Cathey", shelf: 6 },

          { title: "Basic Electroal Engineering By D. P. Kothari", shelf: 6 },

          { title: "Basic Electrical Engineering By D. P. Kothari", shelf: 6 },

          { title: "Basic Electrical Engineering By V. K. Mehta", shelf: 6 }

        ]

      },

      b: {

        id: "B-010",

        books: []

      }

    }

  },

  {

    id: "011",

    subject: "Engineering",

    subAlmirahs: {

      a: {

        id: "A-011",

        books: [

          { title: "Engineering Physics By R. K. Gupta", shelf: 1 },

          { title: "Engineering Physics By R. K. Gupta", shelf: 2 },

          { title: "Engineering Physics By R. K. Gupta", shelf: 3 },

          { title: "Engineering Physics By R. K. Gupta", shelf: 4 },

          { title: "Engineering Physics By R. K. Gupta", shelf: 5 },

          { title: "Engineering Physics By R. K. Gupta", shelf: 6 }

        ]

      },

      b: {

        id: "B-011",

        books: [

          { title: "Generalized Theory of Electrical Machines By P. S. Bimbhra", shelf: 1 },

          { title: "Generalized Theory of Electrical Machines By P. S. Bimbhra", shelf: 2 },

          { title: "EHV-AC-HVDC Transmission Distribution Engineering By S. Rao", shelf: 3 },

          { title: "EHV-AC-HVDC Transmission Distribution Engineering By S. Rao", shelf: 4 },

          { title: "Power System Stability & Control By Prabha Kundur", shelf: 5 },

          { title: "Power System Stability & Control By Prabha Kundur", shelf: 6 }

        ]

      }

    }

  },

  {

    id: "012",

    subject: "Engineering",

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

          { title: "Concepts in Eingineering Design By Ashok Kumar Gupta", shelf: 6 }

        ]

      },

      b: {

        id: "B-012",

        books: [

          { title: "Engineering Mathematics By D. C. Agrawal", shelf: 1 },

          { title: "Engineering Mathematics By D. C. Agrawal", shelf: 2 },

          { title: "Engineering Mathematics By D. C. Agrawal", shelf: 3 },

          { title: "Engineering Mathematics By D. C. Agrawal", shelf: 4 },

          { title: "Engineering Mathematics By D. K. Jain", shelf: 6 },

          { title: "Engineering Mathematics By Sonendra Gupta", shelf: 6 }

        ]

      }

    }

  },

  {

    id: "013",

    subject: "Engineering",

    subAlmirahs: {

      a: {

        id: "A-013",

        books: [

          { title: "Higher Engineering Mathematics By B. S. Grewal", shelf: 1 },

          { title: "Higher Engineering Mathematics By B. S. Grewal", shelf: 2 },

          { title: "Higher Engineering Mathematics By B. S. Grewal", shelf: 3 },

          { title: "Higher Engineering Mathematics By B. S. Grewal", shelf: 4 },

          { title: "Higher Engineering Mathematics By B. V. Ramana", shelf: 5 },

          { title: "Higher Engineering Mathematics By B. V. Ramana", shelf: 6 }

        ]

      },

      b: {

        id: "B-013",

        books: [

          { title: "Basic of Engineering Chemistry By S. S. Dara", shelf: 1 },

          { title: "Engineering Chemistry By Preeti Jain", shelf: 1 },

          { title: "Engineering Chemistry By P. C. Jain", shelf: 2 },

          { title: "Engineering Chemistry By Shashi Chawla", shelf: 3 },

          { title: "Engineering Chemistry By Shashi Chawla", shelf: 4 },

          { title: "T. B. Environmental Chemistry & Pollution Control By S. S. Dara", shelf: 6 }

        ]

      }

    }

  },

  {

    id: "014",

    subject: "Engineering",

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

          { title: "Satellite Communication Systems Engineering By Wilbur L. Pritchard", shelf: 6 }

        ]

      },

      b: {

        id: "B-014",

        books: []

      }

    }

  },

  {

    id: "015",

    subject: "Engineering",

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

          { title: "Eneineering Mathematics - III By B. C. Agrawal", shelf: 6 }

        ]

      },

      b: {

        id: "B-015",

        books: [

          { title: "Engineering Machanics By K. L. Kumar", shelf: 1 },

          { title: "Engineering Machanics By K. L. Kumar", shelf: 2 },

          { title: "T. B. of Engineering Machanics By R. S. Kumar", shelf: 3 },

          { title: "T. B. of Engineering Machanics By R. S. Kumar", shelf: 4 },

          { title: "Engineering Machanics By R. S. Khurmi", shelf: 5 },

          { title: "Engineering Machanics By D. S. Kumar", shelf: 6 },

          { title: "Engineering Machanics By R. K. Rajput", shelf: 6 }

        ]

      }

    }

  },

  {

    id: "016",

    subject: "Engineering",

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

          { title: "ADO.NET By Michaed Othey", shelf: 6 }

        ]

      },

      b: {

        id: "B-016",

        books: []

      }

    }

  },

  {

    id: "017",

    subject: "Engineering",

    subAlmirahs: {

      a: {

        id: "A-017",

        books: [

          { title: "Programming with Java By E. Balagurusamy", shelf: 1 },

          { title: "C++ Without Fear By Brian Overland", shelf: 2 },

          { title: "Microprocessors & Interfacing By Douglas V. Hall", shelf: 3 },

          { title: "Design of The UNIX Operationg System By Marice J. Bach", shelf: 4 },

          { title: "Principles of Electronics By V. K. Mehta", shelf: 5 },

          { title: "Principles of Electronics By B. L. Thareja", shelf: 6 }

        ]

      },

      b: {

        id: "B-017",

        books: [

          { title: "A Course in Electrical & Electronic Measurements & Instrumentation By A. K. Swhney", shelf: 1 },

          { title: "A Course in Electrical & Electronic Measurements & Instrumentation By A. K. Swhney", shelf: 2 },

          { title: "A Course in Electrical & Electronic Measurements & Instrumentation By A. K. Swhney", shelf: 3 },

          { title: "A Course in Electrical & Electronic Measurements & Instrumentation By A. K. Swhney", shelf: 4 },

          { title: "A Course in Electrical & Electronic Measurements & Instrumentation By A. K. Swhney", shelf: 5 },

          { title: "A Course in Electrical & Electronic Measurements & Instrumentation By A. K. Swhney", shelf: 6 }

        ]

      }

    }

  },

  {

    id: "018",

    subject: "Engineering",

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

          { title: "Programming With C By Byron S. Gottfried", shelf: 6 }

        ]

      },

      b: {

        id: "B-018",

        books: [

          { title: "Communication Systems By R. P. Singh", shelf: 4 },

          { title: "Communication Systems By R. P. Singh", shelf: 5 },

          { title: "Communication Systems By R. P. Singh", shelf: 6 }

        ]

      }

    }

  },

  {

    id: "041",

    subject: "Agriculture",

    subAlmirahs: {

      a: {

        id: "A-041",

        books: [

          { title: "Agriculture Heritage By S. R. Reddy", shelf: 1 },

          { title: "Agriculture Heritage By S. R. Reddy", shelf: 2 },

          { title: "Comprehension & Communication Skills Engineering By V. Kumar", shelf: 3 },

          { title: "Plant Biochemistry & Biotechnology By N. K. Gupta", shelf: 4 },

          { title: "Fundamentals of Horticulture By Jitendra Singh", shelf: 5 },

          { title: "Principles of Agronomy By S. R. Reddy", shelf: 6 }

        ]

      },

      b: {

        id: "B-041",

        books: [

          { title: "Plant Biotechnology By B. D. Singh", shelf: 1 },

          { title: "Fundamentals of Agriculture By S. D. Singh", shelf: 2 },

          { title: "HandBook of Agriculture Science By S. S. Singh", shelf: 3 },

          { title: "Plant Pathology By R. P. Singh", shelf: 3 },

          { title: "Problematic Soils And Their Management BY Dilip Ku. Das", shelf: 4 },

          { title: "Introductory Agrometeorology and Climate Change By S. R. Reddy", shelf: 5 },

          { title: "Agronomy By S. C. Telkar", shelf: 6 }

        ]

      }

    }

  },

  {

    id: "042",

    subject: "Agriculture",

    subAlmirahs: {

      a: {

        id: "A-042",

        books: [

          { title: "Funda. Of Plant Biochemistry & Biotechnology By Rajan Katoch", shelf: 1 },

          { title: "T.B. of Agriculture Communication By A. S. Sandhu", shelf: 1 },

          { title: "Fundamentals of Forestry By Pranay Ku. Roy Barman", shelf: 2 },

          { title: "Breeding Field Crops By David Allen", shelf: 3 },

          { title: "T. B. of Human Values of Ethics By Deba Brata Basu", shelf: 4 },

          { title: "Livestock Production & Management By S. G. Sukla", shelf: 5 },

          { title: "T.B. of Entomology By Mathur", shelf: 6 }

        ]

      },

      b: {

        id: "B-042",

        books: [

          { title: "Introduction Soil Science BY D. K. Das", shelf: 1 },

          { title: "Introduction Soil Science BY D. K. Das", shelf: 2 },

          { title: "Introduction Soil Science BY D. K. Das", shelf: 3 },

          { title: "Fund. Of Agriculture By K. P. Singh", shelf: 4 },

          { title: "Introduction to Soil and Water Conservation Engineering By Bimal Chandramal", shelf: 5 },

          { title: "Fundamentals Of Manures And Fertilizers. By P. C. Das", shelf: 6 }

        ]

      }

    }

  },

  {

    id: "043",

    subject: "Agriculture",

    subAlmirahs: {

      a: {

        id: "A-043",

        books: [

          { title: "Introduction to Forestry By S. S. Sagwal", shelf: 1 },

          { title: "Introduction to Forestry By S. S. Sagwal", shelf: 2 },

          { title: "T.B of Applied Entomology-II By Gursharan Singh", shelf: 3 },

          { title: "Statistics for Agricultural Sciences : G Nageswara Rao", shelf: 4 },

          { title: "Introduction to Forestry By S. R. Reddy", shelf: 5 },

          { title: "Plant Breeding By B. D. Singh", shelf: 6 }

        ]

      },

      b: {

        id: "B-043",

        books: [

          { title: "Soil Fertility & Fertilizers By John L. Havlin", shelf: 1 },

          { title: "Computer Fundamentals & Programming In C By Pradip Dey", shelf: 1 },

          { title: "T. B. of Livestock Production Management By V. N. Gautam", shelf: 2 },

          { title: "Essentials of Farm Financial Management By S. S. Johl", shelf: 2 },

          { title: "Diseases of Crop Plants in India By G. Rangaswami", shelf: 3 },

          { title: "Agriculture Economics By S. Subha Reddy", shelf: 4 }

        ]

      }

    }

  },

  {

    id: "044",

    subject: "Agriculture",

    subAlmirahs: {

      a: {

        id: "A-044",

        books: [

          { title: "Introductory Biology By P. K. Sehgal", shelf: 1 },

          { title: "Principles of Agronomy By T Yellamanda Reddy", shelf: 1 },

          { title: "Instant Horticulture By S. N. Gupta", shelf: 3 },

          { title: "Objective Agriculture Economics By K. Nirmal Ravi Kumar", shelf: 4 },

          { title: "Extension Communication & Management By G. L. Ray", shelf: 5 },

          { title: "ELEMENTS OF GENETICS by Phundan Singh", shelf: 6 }

        ]

      },

      b: {

        id: "B-044",

        books: [

          { title: "Plant Disease By R. S. Singh", shelf: 6 }

        ]

      }

    }

  },

  {

    id: "045",

    subject: "Agriculture",

    subAlmirahs: {

      a: {

        id: "A-045",

        books: [

          { title: "Fund. Of Genetics By Omkar Singh", shelf: 1 },

          { title: "Intrepreneurship Development & Business Communication With Practical Work By Saru Narayan", shelf: 1 },

          { title: "Fund. Of Crop Physiology By Omkar Singh", shelf: 1},

          { title: "Introductory Biology By Pratap Singh", shelf: 1 },

          { title: "Vegetable Production By G. S. Sani", shelf: 2 },

          { title: "Agricultural Heritage By Subadh Kumar", shelf: 2 },

          { title: "Rural Sociology & Educational Psychology By B. D. Tyagi", shelf: 2 },

          { title: "Livestock & Poultry Management By Dabes Gupta", shelf: 2 },

          { title: "Plant Biotechnology By H. R. Dagla", shelf: 2 },

          { title: "Human Values & Ethics By D. K. Sharma", shelf: 2 },

          { title: "Farm Structure Power & Machinery By Randhawa Chouhan", shelf: 3 },

          { title: "Introductory Forestry By Vijay Ku. Umrab", shelf: 3 },

          { title: "Introductory Biology By Jay Sharma", shelf: 3 },

          { title: "Pasts of Crops & Stored Grains & Their Management By Krishn Datt Upadhya", shelf: 3 },

          { title: "Fund. Of Agronomy By I. P. S. Ahalawat", shelf: 3 },

          { title: "Crop Improvement By Rajendra Ku. Yadav", shelf: 3 },

          { title: "Livestock Production & Management By Indrajeet Jouhar", shelf: 4 },

          { title: "Fundamentals of Plant Biochemistry & Biotechnology By Omkar Singh", shelf: 4 },

          { title: "NSS/NCC/Physical Education & Yoga Practices By Kaptan P. K. Shamra", shelf: 4 },

          { title: "Agricultural Microbiology By Omkar Singh", shelf: 4 },

          { title: "Elementary Mathematics By R. Singh", shelf: 4 },

          { title: "Principles of Genetics & Plant Breeding By Omkar Singh", shelf: 5 },

          { title: "Fundamentals of Agriculture Economics By Silpi Jain", shelf: 5 },

          { title: "Plant Pathology By V. P. Singh", shelf: 5 },

          { title: "Fundamentals of Soil Science By N. L. Sharma", shelf: 5 },

          { title: "Agricultural Entomology By Yoges Kumar Mathur", shelf: 6 }

        ]

      },

      b: {

        id: "B-045",

        books: []

      }

    }

  },

  {

    id: "046",

    subject: "Agriculture",

    subAlmirahs: {

      a: {

        id: "A-046",

        books: [

          { title: "Intellectual Property Rights By Neeraj Pandey", shelf: 1 },

          { title: "Management and Entrepreneurship By N. V. R. Naidu", shelf: 1 },

          { title: "Principles & Practices of Agronomy By S. S. Singh", shelf: 2 },

          { title: "Practical Manual of Crop Improvement-I By Rajendra Ku. Yadav", shelf: 2 },

          { title: "Breeding Field Crops By David Allen Slepar", shelf: 3 },

          { title: "Practical Manual on Crop Improvement-II By Rajendra Ku. Yadav", shelf: 3 },

          { title: "Introduction to Environmental Science By Y. Anjaneyulu", shelf: 3 },

          { title: "Agriculture Insect Pests and Their Control By V. B. Awasthi", shelf: 4 },

          { title: "Practical Handbook of Genetics By Vikas Pali", shelf: 4 },

          { title: "Modern Technology in Vegetable Production By Pranab Hazra", shelf: 5 },

          { title: "Diseases of Fruit Crops By R. S. Singh", shelf: 5 },

          { title: "Practical Manual on Introductory Biology By Mithlesh Kumar", shelf: 6 },

          { title: "T.B. of Agricultural Extension By Sagar Mondal", shelf: 6 },

          { title: "T.B. on Agri-Informatics By Amit A. Degirikar", shelf: 6 }

        ]

      },

      b: {

        id: "B-046",

        books: []

      }

    }

  },

  {

    id: "047",

    subject: "Science",

    subAlmirahs: {

      a: {

        id: "A-047",

        books: [

          { title: "Concepts of Genetics By William S. Klug", shelf: 1 },

          { title: "Rural Sociology and Educational Psychology By S. Mondal", shelf: 1 },

          { title: "Instrumental Methods of Chemical Analysis By Gurdeep R. Chatwal ", shelf: 1 },

          { title: "T.B. of Organic Chemistry By K. S. Tiwari", shelf: 1 },

          { title: "Chordate Zoology By E. L. Jordan", shelf: 2 },

          { title: "Biometric and Fingerprint Analysis By S. Indira Sudha", shelf: 2 },

          { title: "T.B. of Microbiology By R. C. Dubey", shelf: 2 },

          { title: "Elementary Mathematics By G. Dorofeev", shelf: 3 },

          { title: "T.B. of Inorganic Chemistry By S. K. De", shelf: 3 },

          { title: "T.B. of Organic Chemistry By Arun Bahl", shelf: 4 },

          { title: "Mechanics By D. S. Mathur", shelf: 4 },

          { title: "T.B. of Organic Chemistry By K. S. Tiwari", shelf: 4 },

          { title: "Vogel's Textbook of Practical Organic Chemistry By B. S. Furniss", shelf: 4 },

          { title: "Genetics By B. D. Singh", shelf: 5 },

          { title: "Adv. General Organic Chemistry By Sachin Ku. Ghosh", shelf: 5 },

          { title: "Guide of Computer Forensic and Investigation By Nelson Phillips", shelf: 6 },

          { title: "T. B. of Biotechnology By R. C. Dubey", shelf: 6 }

        ]

      },

      b: {

        id: "B-047",

        books: []

      }

    }

  },

  {

    id: "048",

    subject: "Science",

    subAlmirahs: {

      a: {

        id: "A-048",

        books: [

          { title: "Chemistry of Degree Student By R. L. Madan", shelf: 1 },

          { title: "Selected Topics in Inorganic Chemistry By Wahid U. Malik", shelf: 1 },

          { title: "Physical Evidence in Criminal Investigation & Trials By B. P. Maithil", shelf: 1 },

          { title: "T.B. of Plant Physiology and Biotechnology By S. K. Verma", shelf: 2 },

          { title: "Handbook Of Forensic Psychology By Vimala Veeraraghavan", shelf: 2 },

          { title: "Adv. Inorganic Chemistry By Ashutosh Kar", shelf: 2 },

          { title: "The Narcotic Drugs and Psychotropic Substances Act 1985 By Khetrapal", shelf: 3 },

          { title: "General and Inorganic Chemistry By R. P. Sarkar", shelf: 3 },

          { title: "Indian Evidence Act 1872", shelf: 3 },

          { title: "Physical Chemistry By K. L. Kapoor", shelf: 3 },

          { title: "The Code of Criminal Procedure 1973 By Khetrapal", shelf: 3 },

          { title: "College Botany Vol-I By B. P. Pandey", shelf: 3 },

          { title: "Advanced Organic Chemistry By Maya Shankar Singh", shelf: 4 },

          { title: "T.B of Forensic Chemistry By Syed Aftab Iabal", shelf: 4 },

          { title: "Indian Penal Code 1860 By Khetrapal", shelf: 4 },

          { title: "Biodiversity: Concepts and Conservation By B. . Hosetti", shelf: 4 },

          { title: "Principles of Instrumental Analysis By Skoog", shelf: 5 },

          { title: "Advanced General Organic Chemistry By Sachin Ku. Ghosh", shelf: 5 },

          { title: "Microbiology By Michael J. Pelezar Jr.", shelf: 6 },

          { title: "EXPERIMENTS IN MICROBIOLOGY PLANT PATHOLOGY TISSUE CULTURE AND MICROBIAL BIOTECHNOLOGY By K. Janeja", shelf: 6 }

        ]

      },

      b: {

        id: "B-048",

        books: []

      }

    }

  },

  {

    id: "049",

    subject: "Science",

    subAlmirahs: {

      a: {

        id: "A-049",

        books: [

          { title: "Criminology BY Ram Shuja", shelf: 1 },

          { title: "Astrophysics By K. D. Abhyankar", shelf: 1 },

          { title: "Vogel's Qualitative Inorganic Analysis By Svehla", shelf: 1 },

          { title: "Computer Forensics By John Vacca", shelf: 2 },

          { title: "FUNDAMENTALS OF ENTREPRENEURSHIP. MOHANTY, SANGRAM KESHARI", shelf: 2 },

          { title: "Adavanced T. B. on Bio", shelf: 3 },

          { title: "Classical Mechanics By N. C. Rana", shelf: 3 },

          { title: "Photochemistry and Pericyclic Reactions By Jagdamba Singh", shelf: 3 },

          { title: "Microwaves By K. C. Gupta", shelf: 3 },

          { title: "Instrumental Methods of Analysis By Hobart H. Willard", shelf: 4 },

          { title: "FORENSIC SCIENCE IN CRIMINAL INVESTIGATION & COURT EVIDENCE BY VN SEHGAL", shelf: 4 },

          { title: "An Introduction To Forensic Hair Examination By Shubhra Goutam", shelf: 4 },

          { title: "Spectroscopy of Organic Compounds By P. S. Kalsi", shelf: 5 },

          { title: "Cyber Security By Nina Godbole", shelf: 5 },

          { title: "Advance Organic Chemistry By Arun Bahl", shelf: 5 },

          { title: "Invertebrate Zoology By E. L. Jordan", shelf: 5 },

          { title: "T. B. of Physical Chemistry By K. L. Kapoor", shelf: 5 },

          { title: "An Introduction to Mechanics By Daniel Kleppner", shelf: 5 },

          { title: "TEXTBOOK OF QUANTITATIVE CHEMICAL ANALYSIS By J. Mendham", shelf: 5 },

          { title: "Quantum Chemistry By R. K. Prasad", shelf: 5 },

          { title: "University Physics with Modern Physics By Hugh D. Young", shelf: 5 },

          { title: "Inorganic chemistry By James E. Hubeey", shelf: 6 },

          { title: "Essentials of Forensic Medicine & Toxicology By K. S. Narayan Reddy", shelf: 6 }

        ]

      },

      b: {

        id: "B-049",

        books: []

      }

    }

  },

  {

    id: "050",

    subject: "Science",

    subAlmirahs: {

      a: {

        id: "A-050",

        books: [

          { title: "Physical Chemistry By K. L. Kapoor", shelf: 1 },

          { title: "T. B. of Fishery Science & Indian Fisheries By C.B.L. Shrivastava", shelf: 1 },

          { title: "T.B. of Forensic Medicine Medical Jurisprudence & Toxicology By G. K. Sharma", shelf: 1 },

          { title: "Stereochemistry Conformation and Mechanism By P. S. Kalsi", shelf: 2 },

          { title: "Forensic Science in Crime Investigation By B. S. Nabar", shelf: 2 },

          { title: "Basic Concepts of Analysis Chemistry By S. M. Khoopkar", shelf: 3 },

          { title: "Fundamental of Biochemistry By J. L. Jain", shelf: 3 },

          { title: "Fundamental of Molecular Spectroscopy By Colin N. Banwell", shelf: 3 },

          { title: "Crime Scene Management By M. S. Rao", shelf: 4 },

          { title: "Group Theory in Chemistry By Ashok K. Mukherjee", shelf: 4 },

          { title: "Advanced Organic Chemistry By Maya Shankar Singh", shelf: 4 },

          { title: "Organic Chemistry Volume By I. L. Finar", shelf: 4 },

          { title: "T.B. of Plant Physiology Biochemistry and Biotech By S. K. Verma", shelf: 4 },

          { title: "T.B. of Inorganic Chemistry By A. K. De", shelf: 4 },

          { title: "Introduction to Classical Mechanics By R. G. Takwale", shelf: 5 },

          { title: "An Introduction to Forensic Science in Criminal Investigation By Rukmani Krishnamurthy", shelf: 5 },

          { title: "T. B. Physical Chemistry By A. S. Negi", shelf: 5 },

          { title: "Classical Mechanics By Herbert Goldstein", shelf: 5 },

          { title: "Introduction to quantum mechanics By David J. Griffiths", shelf: 5 },

          { title: "Organics Chemistry By Robert Thomton Morrison", shelf: 5 },

          { title: "Basic Inorganic Chemistry By F. Albert Cotton", shelf: 5 },

          { title: "Theory & Problems of Theoretical Mechanics By Spiegel Murray", shelf: 5 },

          { title: "Forensic Serology & Blood Examination By Archana Tripathi", shelf: 6 },

          { title: "Guidebook to Mechanism in Organic Chemistry By Peter Sykes", shelf: 6 },

          { title: "Advanced T. B. on Biodiversity By K. V. Krishnamurthy", shelf: 6 }

        ]

      },

      b: {

        id: "B-050",

        books: []

      }

    }

  },

  {

    id: "051",

    subject: "Arts Humanities Social Science",

    subAlmirahs: {

      a: {

        id: "A-051",

        books: [

          { title: "General Knowledge 2021 By Team Prabhat", shelf: 1 },

          { title: "Medieval India By L. P. Sharma", shelf: 1 },

          { title: "Indian Economy By Gaurav Datt", shelf: 2 },

          { title: "Micro Economics By M. L. Seth", shelf: 2 },

          { title: "Fluency in English-II By Oxford", shelf: 3 },

          { title: "Certificate Physical And Human Geography By G. C. Leony", shelf: 3 },

          { title: "History of the Modern World By B. V. Rao", shelf: 4 },

          { title: "Health Psychology By Selley E. Taylor", shelf: 4 },

          { title: "Mr Gandhi and Emancipation of the Untouchables By B. R. Ambedkar", shelf: 4 },

          { title: "History of the Modern World By B. V. Rao", shelf: 5 },

          { title: "Samajshastra By D. S. Baghel", shelf: 5 },

          { title: "SOCIAL PSYCHOLOGY By Shelley E. Taylor", shelf: 6 },

          { title: "Social Problems in India By Ram Ahuja", shelf: 6 }

        ]

      },

      b: {

        id: "B-051",

        books: []

      }

    }

  },

  {

    id: "052",

    subject: "Arts Humanities Social Science",

    subAlmirahs: {

      a: {

        id: "A-052",

        books: [

          { title: "Modern Indian Political Thought By V. P. Varma", shelf: 1 },

          { title: "Cousepts and Methods of Histography By K. L. Khurana", shelf: 1 },

          { title: "Modern Indian Political Thought By V. P. Varma", shelf: 2 },

          { title: "Principles of Political Science By Anup Chand Kapur", shelf: 2 },

          { title: "Political Theory By R. C. Agarwal", shelf: 2 },

          { title: "Modern Indian Political Thought By V. P. Varma", shelf: 3 },

          { title: "History of Medical India By Satshi Chandra", shelf: 3 },

          { title: "Public Administration By M. Laxmi Kanth", shelf: 4 },

          { title: "Comparative Government and Politics. By Chetna Sharma Pushp", shelf: 4 },

          { title: "Public Administration By M. Laxmi Kanth", shelf: 5 },

          { title: "Ancient India By V. D. Mahajan", shelf: 5 },

          { title: "Research Methodology BY C. R. Kothari", shelf: 5 },

          { title: "Fundamentals Of Environmental Studies By Mahua Bas", shelf: 5 },

          { title: "Public Administration By M. Laxmi Kanth", shelf: 6 },

          { title: "Indian Government and Politics By B. L. Fadia", shelf: 6 }

        ]

      },

      b: {

        id: "B-052",

        books: []

      }

    }

  },

  {

    id: "053",

    subject: "Language",

    subAlmirahs: {

      a: {

        id: "A-053",

        books: [

          { title: "Tom Jones By Henry Fielding", shelf: 1 },

          { title: "Oliver Twist By Charles Dickens", shelf: 1 },

          { title: "Paradise Lost By John Milton", shelf: 2 },

          { title: "Adventures of Huckleberry Finn By Mark Twain", shelf: 2 },

          { title: "Pride and Prejudice By Jane Austen", shelf: 2 },

          { title: "A short history of English literature By Harry Blamires", shelf: 2 },

          { title: "Hindutva By J. Nanda Kumar", shelf: 3 },

          { title: "The Power of your Subconscious Mind By Joseph Murphy", shelf: 3 },

          { title: "A Background To The Study Of English Literature By Birjadish Prasad", shelf: 4 },

          { title: "Major Constitutions of the World By Dr. V.N. Khanna", shelf: 5 },

          { title: "Issues in Twentieth-Century World History By Sneh Mahajan", shelf: 6 },

          { title: "An Intellectual History for India By Shruthi Kapila", shelf: 6 }

        ]

      },

      b: {

        id: "B-053",

        books: []

      }

    }

  },

  {

    id: "054",

    subject: "Language",

    subAlmirahs: {

      a: {

        id: "A-054",

        books: [

          { title: "Modern By S. P. Varma", shelf: 1 },

          { title: "Bhartiya Videsh Niti By J. N. Dixit", shelf: 2 },

          { title: "Bhartiya Samaj BY M. L. Gupta", shelf: 2 },

          { title: "Western Political Thought By O. P. Gauba", shelf: 3 },

          { title: "Wuthering Heights By Emily Brontë", shelf: 3 },

          { title: "Modern Indian History By V. D. Mahajan", shelf: 4 },

          { title: "Medieval India By K. L. Khurana", shelf: 5 },

          { title: "Indian Government and Politics (Bhartiya Shasan Avam Rajniti) By BL Fadia", shelf: 6 }

        ]

      },

      b: {

        id: "B-054",

        books: []

      }

    }

  },

  {

    id: "055",

    subject: "Commerce",

    subAlmirahs: {

      a: {

        id: "A-055",

        books: [

          { title: "Project Management By Vishwanath Murthy", shelf: 1 },

          { title: "General Knowledge By Lucent's", shelf: 1 },

          { title: "Indian Financial System By R. R. Machiraju", shelf: 2 },

          { title: "Goods & Services Tax & Customs Duty By H. S. Malhotra", shelf: 2 },

          { title: "Banking Risk and Insurance Management By N. R. Mohan Prakash", shelf: 3 },

          { title: "Cost Accounting By Jawahar Lal", shelf: 3 },

          { title: "Cost Accounting By M. C. Shukla", shelf: 3 },

          { title: "Advanced Economic Theory BY H. L. Ahuja", shelf: 4 },

          { title: "Principles Practice of Accounting By P. C. Tulsian", shelf: 4 },

          { title: "The C++ Programming Language By Bjarne Stroustrup", shelf: 4 },

          { title: "Principles of Microeconomics By H. L. Ahuja", shelf: 5 },

          { title: "Financial Management By I. M. Pandey", shelf: 5 },

          { title: "Modern Economics By H. L. Ahuja", shelf: 6 },

          { title: "Corporate Accounting By S. N. Mahiswari", shelf: 6 }

        ]

      },

      b: {

        id: "B-055",

        books: []

      }

    }

  },

  {

    id: "056",

    subject: "Commerce",

    subAlmirahs: {

      a: {

        id: "A-056",

        books: [

          { title: "Disaster Management By R. Subramaniam", shelf: 1 },

          { title: "Management and Cost Accounting By Colin Drury", shelf: 1 },

          { title: "Financial Derivatives: Text and Cases By Prakash B Yaragol", shelf: 1 },

          { title: "Essential of Business Economics By D. N. Dwivedi", shelf: 1 },

          { title: "Business Economics By H. L. Ahuja", shelf: 2 },

          { title: "Indirect Tax Laws By Mahesh Gour", shelf: 2 },

          { title: "Income Tax By H. C. Mehrotra", shelf: 2 },

          { title: "Auditing By T. R. Sharma", shelf: 2 },

          { title: "Advanced Accounting By S. N. Maheswari", shelf: 3 },

          { title: "Manual of Business Law By S. N. Maheswari", shelf: 3 },

          { title: "Python Programming By Reema Thareja", shelf: 3 },

          { title: "Organisational Behaviour By C. B. Gupta", shelf: 3 },

          { title: " International Financial Management By Vyuptakesh Sharma", shelf: 3 },

          { title: "Accounting for Management By S. N. Maheswari", shelf: 4 },

          { title: "Project Management By K. Nagarajan", shelf: 4 },

          { title: "Morden Microeconomics By H. L. Ahuja", shelf: 5 },

          { title: "Financial Accounting By M. Shukla", shelf: 5 },

          { title: "Financial Accounting By S. N. Maheshwari", shelf: 6 }

        ]

      },

      b: {

        id: "B-056",

        books: []

      }

    }

  },

  {

    id: "057",

    subject: "Commerce",

    subAlmirahs: {

      a: {

        id: "A-057",

        books: [

          { title: "International Business By K. Aswathappa", shelf: 1 },

          { title: "Risk Management & Insurance By S. Arunajatesa", shelf: 1 },

          { title: "Cognitive Psychology By Kathleen M. Galotti", shelf: 1 },

          { title: "Business Law By L. M. Porwal", shelf: 1 },

          { title: "Economics Environment of Business by H. L. Ahuja", shelf: 2 },

          { title: "Economy By V. K. Puri", shelf: 2 },

          { title: "GST & Customs Law By K. M. Bansal", shelf: 2 },

          { title: "Indian Economy Issues & Concerns By K. R. Gupta", shelf: 2 },

          { title: "Financial Management By P. C. Tulsian", shelf: 3 },

          { title: "Principles and Practice of Auditing By R. G. Saxena", shelf: 3 },

          { title: "Business Legislation for Management By M. C. Kuchhal", shelf: 3 },

          { title: "Tulsian's Quick Revision for Financial Management By Tulsian P. C.", shelf: 3 },

          { title: "Financial Management By Prasanna Chandra", shelf: 4 },

          { title: "Cost Accounting By S. P. Jain", shelf: 4 },

          { title: "Business Environment By K. Aswathappa", shelf: 5 },

          { title: "Fundamental of Statistics By D. N. Elhance", shelf: 5 },

          { title: "Business Environment By Francia Cherunilam", shelf: 5 },

          { title: "Financial Accounting By Jawahr Lal", shelf: 5 },

          { title: "Marketing Management By Arun Kumar", shelf: 6 }

        ]

      },

      b: {

        id: "B-057",

        books: []

      }

    }

  },

  {

    id: "058",

    subject: "Commerce",

    subAlmirahs: {

      a: {

        id: "A-058",

        books: [

          { title: "Strategic Corporate Social Responsibility By Aswathappa", shelf: 1 },

          { title: "Financial Management By M. Y. Khan", shelf: 1 },

          { title: "Human Resource Management By Aswathappa", shelf: 1 },

          { title: "Human Resource Management By V. S. P. Rao", shelf: 1 },

          { title: "Performance and Reward Management By Deb, Tapomoy", shelf: 2 },

          { title: "Student's Guide to Income Tax By Vinod K. Singhania", shelf: 2 },

          { title: "Object-Oriented Programming in C++ By E. Balagurusamy", shelf: 2 },

          { title: "Business Environment By Justin Paul", shelf: 2 },

          { title: "Ethics in Management By S. A. Sherlekar", shelf: 2 },

          { title: "Managerial Economics By Gaig H. Peterson", shelf: 2 },

          { title: "Advanced Auditing By Rajeev Bansal", shelf: 3 },

          { title: "Marketing Management Indian Cases By Prachi Gupta", shelf: 3 },

          { title: "Principles of Management By P. C. Tripathi", shelf: 4 },

          { title: "Advanced Accounts By M. C. Shukla", shelf: 4 },

          { title: "Introduction to Financial Accounting By Charles Thomas Horngren", shelf: 5 },

          { title: "Operations and Supply Chain Management By F. Robert Jacobs", shelf: 5 },

          { title: "Financial Markets and Institutions By Anthony Saunders", shelf: 5 },

          { title: "Financial Institutions and Markets: Shashi K. Gupta", shelf: 6 },

          { title: "Business Environment By Shaikh Saleem", shelf: 6 },

          { title: "International Business By John Daniels", shelf: 6 },

          { title: "International Business By C. B. Gupta", shelf: 6 }

        ]

      },

      b: {

        id: "B-058",

        books: []

      }

    }

  },

  {

    id: "059",

    subject: "Commerce",

    subAlmirahs: {

      a: {

        id: "A-059",

        books: [

          { title: "Entrepreneurship And Management Concepts By Paritosh Sharma", shelf: 1 },

          { title: "Business Ethics By William H. Shaw", shelf: 1 },

          { title: "Fundamental of Auditing By S. K. Basu", shelf: 1 },

          { title: "Business Ethics and Corporate Governance By S. Prabhakaran", shelf: 1 },

          { title: "Financial Derivatives: Text & Cases By Prakash Yaragol", shelf: 2 },

          { title: "Marketing Management Indian Cases By Prachi Gupta", shelf: 2 },

          { title: "Fundamentals of Computer By E. Balaguruswamy", shelf: 2 },

          { title: "Python The Complete Reference By Mortin C. Brown", shelf: 2 },

          { title: "Python Programming By Reema Thareja", shelf: 2 },

          { title: "Financial Institutions and Markets By Shashi K. Gupta", shelf: 2 },

          { title: "Direct Taxes Law and Practice By Vinod K. Singhania", shelf: 3 },

          { title: "Introduction to Statistical Methods By L. B. Gupta", shelf: 3 },

          { title: "International Financial Reporting Standards By B D Chatterjee", shelf: 3 },

          { title: "Business Mathematics By R. S. Soni", shelf: 3 },

          { title: "International Business By V. K. Bhalla", shelf: 3 },

          { title: "Business Organisation & Management By P. C. Tulsian", shelf: 4 },

          { title: "TULSIAN'S Quick Revision Book Principles and Practice Accounting By P. C. Tulsian", shelf: 4 },

          { title: "Goods and Services Tax (G.S.T.) & Customs Duty By H.C. Mehrotra", shelf: 5 },

          { title: "C++ How to Program By Paul Deitel", shelf: 5 },

          { title: "Human Resource Management By Sharon Pande", shelf: 6 },

          { title: "Investments By Bodie Zvi", shelf: 6 },

          { title: "Human Resource Management By Dr S S Khanka", shelf: 6 },

          { title: "Cost Accounting By M. C. Shukla", shelf: 6 }

        ]

      },

      b: {

        id: "B-059",

        books: []

      }

    }

  },

  {

    id: "060",

    subject: "Commerce",

    subAlmirahs: {

      a: {

        id: "A-060",

        books: [

          { title: "Modern Microeconomics: Theory and Applications By H. L. Ahuja", shelf: 1 },

          { title: "Essentials of Business Communication By Rajendra Pal", shelf: 1 },

          { title: "Performance Management: Toward Organizational Excellence By T. V. Rao", shelf: 1 },

          { title: "Financial Services By M Y Khan", shelf: 2 },

          { title: "International Business By Francis Cherunilam", shelf: 2 },

          { title: "Retail Management By R. S. Tiwari", shelf: 2 },

          { title: "Object-Oriented Programming in C++ By K. Rajaram", shelf: 3 },

          { title: "Human Resource Management By Gary Dessler", shelf: 3 },

          { title: "Performance Management By T. V. Rao", shelf: 3 },

          { title: "Marketing Management By Philip Kotler", shelf: 3 },

          { title: "Financial Accounting By P. C. Tulsian", shelf: 4 },

          { title: "Fundamentals of Computers By Balagurusamy E", shelf: 4 },

          { title: "Computer Fundamentals By Anita Goel", shelf: 4 },

          { title: "INTERNATIONAL BUSINESS By Vyuptakesh Sharan", shelf: 5 },

          { title: "Strategic Corporate Social Responsibility By William Werther", shelf: 5 },

          { title: "Company Law By Anurag Agnihotri", shelf: 6 },

          { title: "Programming with C++ By John K. Hubbard", shelf: 6 },

          { title: "Personal Finance By Jeff Madura", shelf: 6 },

          { title: "Essentials Of Management By Harold Koontz", shelf: 6 },

          { title: "Computer Fundamental By Anita Goel", shelf: 6 },

          { title: "Human Resource Management By Chitra Atmaram Nail", shelf: 6 }

        ]

      },

      b: {

        id: "B-060",

        books: []

      }

    }

  },

  {

    id: "061",

    subject: "Management",

    subAlmirahs: {

      a: {

        id: "A-061",

        books: [

          { title: "International Business By V. K. Bhalla", shelf: 1 },

          { title: "Industrial Engineering and Production Management By Martand T Telsang", shelf: 1 },

          { title: "Computer Fundamentals By O. P. Nagpal", shelf: 1 },

          { title: "Banking Law and Practice By Sukhvinder Mishra", shelf: 1 },

          { title: "Human Resource Text & Case By Aswathappa Das", shelf: 2 },

          { title: "Marketing Management By Rajan Saxena", shelf: 2 },

          { title: "Principles of Economics V. C. Sinha", shelf: 2 },

          { title: "Financial Management Theory and Practice By Prasanna Chandra", shelf: 3 },

          { title: "Principles of Risk Management and Insurance By George Rejda", shelf: 3 },

          { title: "Principles of Corporate Finance By Richard A. Brealey", shelf: 3 },

          { title: "Managerial Economics By D. N. Dwivedi", shelf: 3 },

          { title: "Managing for Value By S. S. Iyer", shelf: 3 },

          { title: "Projects: Planning, Analysis, Selection, Financing, Implementation By Chandra", shelf: 4 },

          { title: "Essentials of Management By Harold Koontz", shelf: 4 },

          { title: "Human Resource Management By Garg Dessler", shelf: 4 },

          { title: "Production and Operations Management By PANNEERSELVAM, R.", shelf: 4 },

          { title: "Introducing Data Science By Davy Cielen", shelf: 4 },

          { title: "Business Environment By Shaikh Saleem", shelf: 5 },

          { title: "Marketing Management By Philip Kotler", shelf: 5 },

          { title: "Management B James A.F. Stoner", shelf: 5 },

          { title: "Principles of Marketing By Philip Kotler", shelf: 5 },

          { title: "Industrial Engineering and Management By O. P. Khanna", shelf: 6 },

          { title: "Marketing Management By Arun Kumar", shelf: 6 },

          { title: "International Business Text & Cases By P. Subha Rao", shelf: 6 },

          { title: "Marketing Management By Philip Kotler", shelf: 6 }

        ]

      },

      b: {

        id: "B-061",

        books: []

      }

    }

  },

  {

    id: "062",

    subject: "Management",

    subAlmirahs: {

      a: {

        id: "A-062",

        books: [

          { title: "Entrepreneurship and Management Concepts By Vikash Saraf", shelf: 1 },

          { title: "Financial Management By S. P. Gupta", shelf: 1 },

          { title: "Entrepreneurship Development By P. C. Shejwalkas", shelf: 1 },

          { title: "Security Analysis and Portfolio Management By Donald E. Fischer", shelf: 1 },

          { title: "Management of Financial Institutions and Services By R. S. Sachdeva", shelf: 1 },

          { title: "Entrepreneurship, By Robert Hisrich", shelf: 1 },

          { title: "Business Ethics By F. C. Sharma", shelf: 2 },

          { title: "Financial Accounting For Managers By Sanjay Dhamija", shelf: 2 },

          { title: "Financial Management By V. K. Bhalla", shelf: 2 },

          { title: "Hospital & Clinical Pharmacy Theory & Practicals By K. Sampath", shelf: 2 },

          { title: "International Finance By Jayanta Kumar Seal", shelf: 2 },

          { title: "Taxmans Direct Taxes Law & Practice By Vinod Kumar Singhanis", shelf: 2 },

          { title: "International Business By Ritika Sinha", shelf: 3 },

          { title: "Human Resource Management By S. S. Khanka", shelf: 3 },

          { title: "Entrepreneurial Development By Dr S S Khanka", shelf: 3 },

          { title: "Human Resource Management By R. C. Agrawal", shelf: 3 },

          { title: "Human Resource Management By F. C. Sharma", shelf: 3 },

          { title: "International Economics By H. G. Mannur", shelf: 3 },

          { title: "Organisational Behaviour By C. B. Gupta", shelf: 4 },

          { title: "Accounting For Management By S. K. Bhattacharya", shelf: 4 },

          { title: "Introduction to Statistical Methods By C. B. Gupta", shelf: 4 },

          { title: "Managements Accountings By M. E. Thukaram", shelf: 4 },

          { title: "Essentials Of Business Environment By Aswathappa", shelf: 5 },

          { title: "The Dynamics of Entrepreneurial Development and Management By Vasant Desai", shelf: 5 },

          { title: "Business Environment Text & Cases Ed 27 By Francis Cherunilam", shelf: 5 },

          { title: "Business Environment Text & Cases Ed 28 By Francis Cherunilam", shelf: 5 },

          { title: "Management Accounting: Principles & Practices By M. S. Shaf", shelf: 6 },

          { title: "Organisational Behaviour By K. Aswathappa", shelf: 6 },

          { title: "Indian Economy By V. K. Puri", shelf: 6 },

          { title: "International financial management By Sharan Vyuptakesh", shelf: 6 }

        ]

      },

      b: {

        id: "B-062",

        books: []

      }

    }

  },

  {

    id: "063",

    subject: "Management",

    subAlmirahs: {

      a: {

        id: "A-063",

        books: [

          { title: "Business Environment By Amit Kumar", shelf: 1 },

          { title: "International Business By Charles W. L. Hill", shelf: 1 },

          { title: "Business Ethics By C. S. V. Murthy", shelf: 1 },

          { title: "Issues in Twentieth-Century World History By Sneh Mahajan", shelf: 2 },

          { title: "Research Methodology By C. R. Kothari", shelf: 2 },

          { title: "Sales and Distribution Management By Richard R. Still", shelf: 3 },

          { title: "Production & Operations Management By S. N. Chary", shelf: 3 },

          { title: "Business Ethics By O. C. Ferrell", shelf: 3 },

          { title: "Sales & Distribution Management By V. C. Mathur", shelf: 3 },

          { title: "Supply Chain Management By C. John Langley", shelf: 3 },

          { title: "Banking Theory Law & Practice By E. Gordon", shelf: 4 },

          { title: "Advanced Accounts By M. C. Shukla", shelf: 4 },

          { title: "Sales and Distribution Management By Tapan K. Panda", shelf: 4 },

          { title: "International Financial Management By P. G. Apte", shelf: 4 },

          { title: "Supply Chain Management By Sunil Chopra", shelf: 4 },

          { title: "Business Intelligence and Analytics: Systems for Decision Support By Dursun Delen", shelf: 5 },

          { title: "Business Communication Essentials By Courtland L Bovee", shelf: 5 },

          { title: "Security Analysis & Portfolio Management By Shalini Talwar", shelf: 5 },

          { title: "Total Quality Management By V. Vijayan", shelf: 5 },

          { title: "Cost Accounting By S. P. Jain", shelf: 6 },

          { title: "Marketing Research & Consumer Behaviour By S. Sumathi", shelf: 6 },

          { title: "Statistics for Management By Richard I. Lovin", shelf: 6 }

        ]

      },

      b: {

        id: "B-063",

        books: []

      }

    }

  },

  {

    id: "064",

    subject: "Management",

    subAlmirahs: {

      a: {

        id: "A-064",

        books: [

          { title: "E-Commerce (Business Technology Society) By Kenneth C. Laudon", shelf: 1 },

          { title: "Services Marketing: Concepts, Strategies & Cases By John E. G. Bateson", shelf: 1 },

          { title: "E-Governance By C. S. R. Prabhu", shelf: 1 },

          { title: "E-Governance Technology By V. Rajaraman", shelf: 1},

          { title: "E-Governance & Applications By Adesh Ku. Pandey", shelf: 1 },

          { title: "Managerial Decision Modeling With Spreadsheets By Nagraj Alakrishnan", shelf: 2 },

          { title: "Information Storage & Management By G. Somasundaram", shelf: 2 },

          { title: "E-Governance (Indian Perspective) By P. T. Joseph", shelf: 2 },

          { title: "Event Marketing & Management By Sanjay Singh Gaur", shelf: 3 },

          { title: "Information Storage & Management By G. Somasundaram", shelf: 3 },

          { title: "Financial Services By M. Y. Khan", shelf: 4 },

          { title: "Insurance Management By Karam Pal", shelf: 4 },

          { title: "Principles of Management By Pravin Durai", shelf: 4 },

          { title: "Financial Management By C. Paramasivan", shelf: 4 },

          { title: "Advertising & IMC By Sandra Moriarty", shelf: 5 },

          { title: "Investment Analysis & Portfolio Management By Prasanna Chandra", shelf: 5 },

          { title: "Strategic Management By Fred R. David", shelf: 6 },

          { title: "Business Communication By K. K. Sinha", shelf: 6 },

          { title: "T. B. of Accounting Management By S. N. Maheshwari", shelf: 6 }

        ]

      },

      b: {

        id: "B-064",

        books: []

      }

    }

  },

  {

    id: "065",

    subject: "Management",

    subAlmirahs: {

      a: {

        id: "A-065",

        books: [

          { title: "Retail Management By Marjit Singh", shelf: 1 },

          { title: "Marketing Research By Naresh K. Malhotra", shelf: 1 },

          { title: "Business Communication By K. K. Singh", shelf: 2 },

          { title: "Cost Accounting By M. N. Arora", shelf: 2 },

          { title: "Corporate Accounting By S. N. Maheshwari", shelf: 2 },

          { title: "Marketing Management By K. Karunakaran", shelf: 3 },

          { title: "Managerial Economics By H. L. Ahuja", shelf: 3 },

          { title: "Financial Planning: Theory and Practice By Sid Mittra", shelf: 3 },

          { title: "Principles and Practice of Management By L. M. Prasad", shelf: 4 },

          { title: "Essentials of Management By Harold Koontz", shelf: 4 },

          { title: "Investment Analysis & Portfolio Management By R. P. Rustogi", shelf: 5 },

          { title: "Marketing Management By Arun Kumar", shelf: 5 },

          { title: "Business Laws By Jyoti Rattan", shelf: 6 },

          { title: "Advanced Accountis Vol-1 By M. C. Shukla", shelf: 6 },

          { title: "Global Marketing Management By Warren J. Keegan", shelf: 6 },

          { title: "Supply Chain Logistics Management By Donald J. Bowersox", shelf: 6 }

        ]

      },

      b: {

        id: "B-065",

        books: []

      }

    }

  },

  {

    id: "066",

    subject: "Management",

    subAlmirahs: {

      a: {

        id: "A-066",

        books: [

          { title: "Cost & Management Accounting By M. N. Arora", shelf: 1 },

          { title: "Event Marketing & Management By Sanjay Singh Gaur", shelf: 1 },

          { title: "Business Policy & Strategic Management By Senthil Kumar", shelf: 1 },

          { title: "Financial Management By I. M. Pandey", shelf: 2 },

          { title: "Principles of Supply Chain Management: A Balanced Approach By G. Keong Leong", shelf: 2 },

          { title: "Business Ethics and Managerial Values By S. K. Dhatia", shelf: 2 },

          { title: "Business Research Methodology By J. K. Sechdeva", shelf: 3 },

          { title: "Business Analytics By James R. Evans", shelf: 3 },

          { title: "Business Statistics By S. C. Gupta", shelf: 3 },

          { title: "Management Accounting By M. Y. Khan", shelf: 4 },

          { title: "Strategic Management Concepts By Fred R. David", shelf: 4 },

          { title: "Total Quality Management By K. Shridhara Bhat", shelf: 5 },

          { title: "Big Data & Analytics By Seema Acharya", shelf: 5 },

          { title: "Big Data Analytics By Raj Kamal", shelf: 5 },

          { title: "Business & Research Methods By William G. Zikmund", shelf: 6 },

          { title: "Concepts in Strategic Management & Business Policy By Thomas L. Wheelen", shelf: 6 },

          { title: "Project Management By Jeffrey K. Pinto", shelf: 6 },

          { title: "Comparative Government & Politics By A. Bhatt", shelf: 6 },

          { title: "Leadership in Organizations By Gary Yukl", shelf: 6 },

          { title: "Organizational Theory Design & Change By Gareth R. Jones", shelf: 6 }

        ]

      },

      b: {

        id: "B-066",

        books: []

      }

    }

  }

];
