import {
  createBrowserRouter,
  RouterProvider
  
} from "react-router-dom";
import { MainLayout } from "./components/MainLayout";


// import { Login } from './pages/Login'
//Não tem LessonOne pq já está incorporado na LessonTwo
import { LessonTwo } from './lessons/LessonTwo'
import { LessonThree } from './lessons/LessonThree'
import { LessonFour } from './lessons/LessonFour'
// import { Games } from "./pages/Games"
import { LessonSeven } from "./lessons/LessonSeven"
import { LessonThirteen } from "./lessons/LessonThirteen"
 import { LessonFourteen } from "./lessons/LessonFourteen"
 import { LessonFifteen } from "./lessons/LessonFifteen"
import { LessonSixteen } from "./lessons/LessonSixteen"
import { Todo } from "./pages/Todo";
import { LessonSeventeen } from "./lessons/LessonSeventeen";
import { ConfigurationProvider } from "./hooks/configuration";





// import { LessonFive } from './lessons/LessonFive'
function App() {

  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        // {
        //   path:'',
        //   element: <Home />
        // }, exemplo que poderia ser de um indice principal
        {
          path: 'lesson-two',
          element: <LessonTwo/>
        },
        {
          path: 'lesson-three',
          element: <LessonThree/>
        },
        {
          path: 'lesson-four',
          element: <LessonFour/>
        },
        {
          path: 'lesson-seven',
          element: <LessonSeven/>
        },
        {
          path: 'lesson-thirteen',
          element: <LessonThirteen/>
        },
        {
          path: 'lesson-fourteen',
          element: <LessonFourteen/>
        },            
        {
          path: 'lesson-fifteen',
          element: <LessonFifteen/>
        },
        {
          path: 'lesson-seventeen',
          element: <LessonSeventeen/>,
          children: [
            {
              path: 'post',
              element: <LessonSeventeen />
            }
          ]
        }      
        // {
        //   path: 'lesson-fifteen/:id',
        //   element: <LessonFifteen/>
        // }    
      ]
    },
    {
      path: 'lesson-todo',
      element: <Todo />
    }
  ]);
 

  return (   
    // <Login />
    // <LessonTwo />
    // <LessonThree />
    // <LessonFour />
    // <LessonFive />
    // <Games />
    // <LessonSeven />
    // <LessonThirteen />
    // <LessonFourteen />    
    // <LessonFifteen />
    // <LessonSixteen />
    <ConfigurationProvider>
      <RouterProvider router={appRouter}/>
    </ConfigurationProvider>
  )

}

export default App
