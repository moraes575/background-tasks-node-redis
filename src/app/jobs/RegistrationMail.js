import Mail from '../lib/Mail'

export default {
    key: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3
    },
    async handle({ data }) {
        const { user } = data

        await Mail.sendMail({
            from: 'Matheus Moraes <matheus.moraes111@outlook.com>',
            to: `${user.name} <${email}>`,
            subject: 'User registration',
            html: `Hello ${user.name}, welcome to the system!`
        })
    }
}