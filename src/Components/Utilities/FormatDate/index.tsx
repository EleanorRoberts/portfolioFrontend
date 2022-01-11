
export function formatDate(stringDate: string): string {
    let arrayDate = stringDate.split('-');
    let formattedDate = '';
    switch (arrayDate[1]) {
        case '01':
            formattedDate += 'January ';
            break;
        case '02':
            formattedDate += 'February ';
            break;
        case '03':
            formattedDate += 'March ';
            break;
        case '04':
            formattedDate += 'April ';
            break;
        case '05':
            formattedDate += 'May ';
            break;
        case '06':
            formattedDate += 'June ';
            break;
        case '07':
            formattedDate += 'July ';
            break;
        case '08':
            formattedDate += 'August ';
            break;
        case '09':
            formattedDate += 'September ';
            break;
        case '10':
            formattedDate += 'October ';
            break;
        case '11':
            formattedDate += 'November ';
            break;
        case '12':
            formattedDate += 'December ';
            break;
    }
    formattedDate += arrayDate[0];
    return formattedDate;
}

