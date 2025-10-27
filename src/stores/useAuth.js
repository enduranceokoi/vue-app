import { defineStore } from 'pinia'
export const useAuth = defineStore('auth', {
  state: () => ({ user: JSON.parse(localStorage.getItem('ticketapp_session') || 'null') }),
  actions: {
    login({email,password}) {
      if (email === 'test@ticketapp.local' && password === 'Password123!') {
        const token = {email, token: 'fake-jwt-token', createdAt: Date.now()}
        localStorage.setItem('ticketapp_session', JSON.stringify(token))
        this.user = token
        return {ok:true}
      }
      return {ok:false, message:'Invalid credentials'}
    },
    signup({email,password}) {
      const token = {email, token: 'fake-jwt-token'}
      localStorage.setItem('ticketapp_session', JSON.stringify(token))
      this.user = token
      return {ok:true}
    },
    logout() {
      localStorage.removeItem('ticketapp_session')
      this.user = null
    }
  }
})
