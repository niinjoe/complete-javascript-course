const day = 'monday'

if (day === 'monday') {
    console.log('Plan course structure')
    console.log('Go to coding meetup')
} else if (day === 'tuesday'){
    console.log('Prepare theory videos')
} else if (day === 'wednesday' || day === 'tursday'){
    console.log('Write code examples')
} else if (day === 'friday'){
    console.log('Record videos')
} else if (day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend')
} else {
    console.log('Not a valid day!')
}