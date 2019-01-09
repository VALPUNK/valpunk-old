export const joinme: Project = {
  id: "0",
  projectTitle: "JOIN ME",
  stakeholders: ["Maria"],
  developers: ["VAL PUNK, LLC"],
  weeks: [
    {
      id: "0",
      weekNumber: 1,
      title: "Develop Basic App Framework",
      subtasks: [
        {
          id: "0",
          name: "Login Page"
        },
        {
          id: "1",
          name: "Signup Page"
        },
        {
          id: "2",
          name: "Recover Password Page"
        },
        {
          id: "3",
          name: "Edit Profile Page"
        },
        {
          id: "4",
          name: "Swipe page"
        }
      ],
      overview:
        "In this first stage we will prepare a basic framework for the app. There will be no true functionality, but we'll set up foundation from which to build the rest of the app."
    },
    {
      id: "1",
      weekNumber: 2,
      title: "Provide basic functionality to the service",
      subtasks: [
        {
          id: "0",
          name: "Account authentication "
        },
        {
          id: "1",
          name: "Profile creation and editing"
        },
        {
          id: "2",
          name: "Record profile swiping"
        }
      ],
      overview:
        "Basic functionality is added to the app. We will have the ability to create accounts and login. With these accounts we can swipe on other accounts to indicate interest or passing."
    },
    {
      id: "2",
      weekNumber: 3,
      title: "Put together tools and add aditional basic functionality",
      subtasks: [
        {
          id: "0",
          name: "Tool to View User Accounts Table"
        },
        {
          id: "1",
          name: "Tool to Edit Accounts"
        },
        {
          id: "2",
          name: "Tool to Reset User Matches and Passes"
        },
        {
          id: "3",
          name: "Give Users the ability to upload photos"
        },
        {
          id: "4",
          name: "Basic location matching for users"
        }
      ],
      overview:
        "In this stage we build tools to manage new accounts we create to making building and testing easier. We also develop location proximity searching functionality so that users can search for others near them."
    },
    {
      id: "3",
      weekNumber: 4,
      title: "Put together tools and add aditional basic functionality",
      subtasks: [
        {
          id: "0",
          name: "Tool to View User Accounts Table"
        },
        {
          id: "1",
          name: "Tool to Edit Accounts"
        },
        {
          id: "2",
          name: "Tool to Reset User Matches and Passes"
        },
        {
          id: "3",
          name: "Give Users the ability to upload photos"
        },
        {
          id: "4",
          name: "Basic location matching for users"
        }
      ],
      overview:
        "In this stage we build tools to manage new accounts we create to making building and testing easier. We also develop location proximity searching functionality so that users can search for others near them."
    },
    {
      id: "4",
      weekNumber: 5,
      title: "Chat Support & Notifications",
      subtasks: [
        {
          id: "0",
          name: "Provide real time chat support between different users"
        },
        {
          id: "1",
          name: "Keep chat logs"
        },
        {
          id: "2",
          name:
            "Can only start chat when there's a match (or some other condition)"
        },
        {
          id: "3",
          name:
            "Notifications in the mobile app for matches and having received a chat message"
        }
      ],
      overview:
        "In this week we develop real time chat between users. We also set up notifications to be recevied in the app. Notifications will be happen when matching with a user as well as receiving a new chat message."
    },
    {
      id: "5",
      weekNumber: 6,
      title: "Calendar Support",
      subtasks: [
        {
          id: "0",
          name:
            "Users to have calendars where they can put their availability and what they like to do"
        },
        {
          id: "1",
          name: "Interested users can view this availability and suggest dates"
        },
        {
          id: "2",
          name: "The person of interest can then accept a date"
        }
      ],
      overview:
        "In this week we build a basic calendar and appointment setting feature. Successfully matched users can view each other's calendars and propose dates to each other. Users will then be able to accept or decline dates."
    },
    {
      id: "6",
      weekNumber: 7,
      title: "Questionnaires and Tags",
      subtasks: [
        {
          id: "0",
          name: "Develop Questionnaires for users to answer"
        },
        {
          id: "1",
          name: "Users can view the answers to these questions"
        },
        {
          id: "2",
          name: "Users can also select from a few of tags we create"
        }
      ],
      overview:
        "In this week we will develop a questionnaire / survery system along with tags users can select for their profile. "
    },
    {
      id: "7",
      weekNumber: 8,
      title: "Payment Handling",
      subtasks: [
        {
          id: "0",
          name: "Store basic credit card information with Stripe"
        },
        {
          id: "1",
          name:
            "Add a subscription system for 1, 3, and 6 month subscription rates"
        }
      ],
      overview:
        "In this week we begin developing and testing a monthly subscription system."
    },
    {
      id: "8",
      weekNumber: 9,
      title: "Uber Integration",
      subtasks: [
        {
          id: "0",
          name: "Users will have the ability to send their dates an uber"
        },
        {
          id: "1",
          name:
            "Users will also be able to fund other users accounts for Uber rides"
        }
      ],
      overview:
        "In this week we explore and add Uber API integration where users can send an Uber to another user. Alternatively, users can also fund other user accounts so they can request their own Uber rides."
    },
    {
      id: "9",
      weekNumber: 10,
      title: "Tooling",
      subtasks: [
        {
          id: "0",
          name: "Ability to view and manage users from a dashboard"
        },
        {
          id: "1",
          name: "Ability to handle any payment issues"
        },
        {
          id: "2",
          name: "Develop other tools we may need"
        }
      ],
      overview:
        "As we get closer to launch we make sure that we have the correct tools in place to handle any unforseen issues that our users come across."
    },
    {
      id: "10",
      weekNumber: 11,
      title: "Public facing website",
      subtasks: [
        {
          id: "0",
          name: "Main page describing the app"
        },
        {
          id: "1",
          name: "Contact Page"
        },
        {
          id: "2",
          name: "FAQ Page"
        }
      ],
      overview:
        "We put together a simple webpage for the public to see that describes the app. We will also have a contact and FAQ page to address any questions and issues."
    },
    {
      id: "11",
      weekNumber: 12,
      title: "Launch Prep",
      subtasks: [
        {
          id: "0",
          name: "Final tests on the app, site, and database"
        },
        {
          id: "1",
          name: "Have a separate production database for live users to be on"
        }
      ],
      overview:
        "We run through final tests and make sure we have production specific features of the app turned on. We will keep a separate database for our tests and the other for live users."
    },
    {
      id: "12",
      weekNumber: 13,
      title: "Submission",
      subtasks: [
        {
          id: "0",
          name: "Submit the app the Apple App"
        },
        {
          id: "1",
          name: "Submit the app to the Google Play Store"
        }
      ],
      overview:
        "Finally, we submit to the two stores and wait for approval. We also tie up any other issues that may have cropped up."
    }
  ]
}

export interface Project {
  id: string
  projectTitle: string
  stakeholders: string[]
  developers: string[]
  weeks: WeekProps[]
}

export interface WeekProps {
  id: string
  weekNumber: number
  title: string
  subtasks: SubtaskProps[]
  overview: string
}

export interface SubtaskProps {
  id?: string
  name: string
  subtask?: boolean
}
