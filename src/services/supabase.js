import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY

export const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_KEY)

export async function createUserWithEmail (userName, email, password) {
  const { data, error } = await supabase.auth.signUp(
    {
      email,
      password,
      options: {
        data: {
          userName,
          imgAvatar: '',
          url: `/${userName}`,
          isActive: true,
          socials: [
            {
              name: 'twitter',
              user: '',
              url: 'https://twitter.com/'
            },
            {
              name: 'instagram',
              user: '',
              url: 'https://www.instagram.com/'
            },
            {
              name: 'youtube',
              user: '',
              url: 'https://www.youtube.com/@'
            },
            {
              name: 'twitch',
              user: '',
              url: 'https://www.twitch.tv/'
            },
            {
              name: 'web',
              user: '',
              url: ''
            }
          ],
          categories: {
            cinema: {
              corrects: 1,
              errors: 2,
              totalPoints: 3,
              positionRank: 40,
              levels_completed: []
            },
            series: {
              corrects: 10,
              errors: 20,
              totalPoints: 30,
              positionRank: 40,
              levels_completed: []
            },
            videogames: {
              corrects: 100,
              errors: 200,
              totalPoints: 300,
              positionRank: 400,
              levels_completed: []
            }
          }
        }
      }
    }
  )
  return (data, error)
}

export const loginWithEmail = async (email, password) => {
  console.log('test')
  const data = await supabase.auth.signInWithPassword({
    email,
    password
  })
  window.location.replace('/')
  return (data)
}
export const getUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()

  return (user)
}

export async function getUserList () {
  const { data: { users }, error } = await supabase.auth.admin.listUsers()
  return (users)
}
