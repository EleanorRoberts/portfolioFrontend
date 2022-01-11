
export function formatTitle(stringTitle: string): string {
    const arrayTitle = stringTitle.split('-');
    let formattedTitle = '';
    arrayTitle.forEach((word, wordIndex) => {
        if (word === 'io') {
            formattedTitle += 'iO ';
        } else {
            const letters = word.split('');
            letters.forEach((letter, letterIndex) => {
                if (letterIndex === 0) {
                    formattedTitle += letter.toUpperCase();
                } else {
                    formattedTitle += letter;
                }
                if (letterIndex === (letters.length - 1) && wordIndex !== (arrayTitle.length - 1)) {
                    formattedTitle += ' ';
                }
            })
        }
    })
    return formattedTitle;
}

