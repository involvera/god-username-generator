import _ from 'lodash'

import TITLES from './titles'
import ADJECTIVES from './adjectives'
import NAMES from './names'

const NAMES_LENGTH = NAMES.length
const MAX_USERNAME_LENGTH = 16

const getRandomN = (max: number) => Math.floor(Math.random() * max);

const GenerateRandomUsername = () => {
    const name = NAMES[getRandomN(NAMES_LENGTH)]

    const r = getRandomN(5) 
    const spaceLeft = MAX_USERNAME_LENGTH - name.length - 1
    if (spaceLeft < 3)
        return name
    if (r == 1)
        return name + getRandomN(Math.pow(10, 3))
    if (r == 0){
        const list = _.filter(TITLES, (o) => o.length <= spaceLeft)
        if (list.length > 0){
            return (list[getRandomN(list.length)] + '_' + name).toLowerCase()
        }
    }
    const list = _.filter(ADJECTIVES, (o) => o.length <= spaceLeft)
    if (list.length > 0){
        return (list[getRandomN(list.length)] + '_' + name).toLowerCase()
    }
    return name
}

export {
    GenerateRandomUsername
}