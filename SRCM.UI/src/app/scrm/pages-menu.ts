import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "SCRM",
    icon: "shopping-cart-outline",
    link: "/scrm/admin/dashboard",
    home: true,
  },

  {
    title: "Students",
    icon: "award-outline",
    children: [
      {
        title: "All Students",
        link: "/scrm/School/Students/allstudent",
        icon: "list-outline",
      },
      {
        title: "Add new",
        link: "/scrm/School/Students/newstudent",
        icon: "person-add-outline",
      },

      {
        title: "Manage Families",
        link: "/scrm/School/Students/managefamilies",
        icon: "people-outline",
      },
      {
        title: "Active / Inactive",
        link: "/scrm/School/Students/activeinactive",
        icon: "person-done-outline",
      },
      {
        title: "Admission Letter",
        link: "/scrm/School/Students/admissionletter",
        icon: "file-text-outline",
      },
      {
        title: "Student ID Card",
        link: "/scrm/School/Students/studentcard",
        icon: "person-outline",
      },
      {
        title: "Print Basic List",
        link: "/scrm/School/Students/printbasiclist",
        icon: "download-outline",
      },
      {
        title: "Promote Students",
        link: "/scrm/School/Students/promotestudent",
        icon: "trending-up-outline",
      },
    ],
  },
  {
    title: "Class",
    icon: "award-outline",
    children: [
      {
        title: "All Class",
        link: "/scrm/School/Class/allclass",
        icon: "list-outline",
      },
      {
        title: "New Class",
        link: "/scrm/School/Class/newclass",
        icon: "person-add-outline",
      },
    ],
  },
  {
    title: "Subject",
    icon: "award-outline",
    children: [
      {
        title: "Classess with Subject",
        link: "/scrm/School/Subject/classesswithsubject",
        icon: "list-outline",
      },
      {
        title: "Assign Subject",
        link: "/scrm/School/Subject/assignsubject",
        icon: "person-add-outline",
      },
    ],
  },
  {
    title: "Employees",
    icon: "award-outline",
    children: [
      {
        title: "All Employees",
        link: "/scrm/School/Employees/allemployees",
        icon: "list-outline",
      },
      {
        title: "Staff ID Card",
        link: "/scrm/School/Employees/staffcard",
        icon: "person-add-outline",
      },
      {
        title: "Job Letter",
        link: "/scrm/School/Employees/jobletter",
        icon: "person-add-outline",
      },

    ],
  },
];

