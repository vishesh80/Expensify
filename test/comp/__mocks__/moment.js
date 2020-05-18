
const moment = jest.requireActual('moment');

export default function fakeMoment(timeStamp = 0)
{   
    return moment(timeStamp);
}