export const joinme: Project = {
  id: "0",
  projectTitle: "JOIN ME",
  stakeholders: ["Maria"],
  developers: ["VAL PUNK, LLC"],
  devPeriod: "Week",
  costPerPeriod: 1500,
  dateOfQuote: "January 11, 2019",
  expirationOfQuote: "February 8, 2019",
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
        "Basic functionality is added to the app. We will have the ability to create accounts and login. With these accounts we can swipe on other accounts to indicate interest or passing. In this stage we build tools to manage new accounts we create to making building and testing easier. We also develop location proximity searching functionality so that users can search for others near them."
    },

    {
      id: "2",
      weekNumber: 3,
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
      id: "3",
      weekNumber: 4,
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
      id: "4",
      weekNumber: 5,
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
      id: "5",
      weekNumber: 6,
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
      id: "6",
      weekNumber: 7,
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
      id: "7",
      weekNumber: 8,
      title: "Launch Prep",
      subtasks: [
        {
          id: "0",
          name: "Final tests on the app, site, and database"
        },
        {
          id: "1",
          name: "Have a separate production database for live users to be on"
        },
        {
          id: "2",
          name: "Submit the app the Apple App"
        },
        {
          id: "3",
          name: "Submit the app to the Google Play Store"
        }
      ],
      overview:
        "We run through final tests and make sure we have production specific features of the app turned on. We will keep a separate database for our tests and the other for live users. Finally, we submit to the two stores and wait for approval. We also tie up any other issues that may have cropped up."
    }
  ]
}

export interface Project {
  id?: string
  projectTitle?: string
  stakeholders?: string[]
  developers?: string[]
  dateOfQuote?: string
  expirationOfQuote?: string
  devPeriod?: string
  costPerPeriod?: number
  weeks?: WeekProps[]
}

export interface WeekProps {
  id?: string
  weekNumber?: number
  title: string
  subtasks: SubtaskProps[]
  overview: string
}

export interface SubtaskProps {
  id?: string
  name: string
  subtask?: boolean
}
