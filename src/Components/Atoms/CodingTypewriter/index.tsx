import './style.scss';

const CodingTypewriter = () => {
    return <div className="codingBox css-typing">
        <p>{'let $ellieRoberts = new Developer;'}</p>
        <p>{'let $nova = new Dog;'}</p>
        <p>{'$nova->setOwner($ellieRoberts);'}</p>
        <p>{'$ellieRoberts->writeCode();'}</p>
        <p>{'$ellieRoberts->petPuppy($nova);'}</p>
    </div>
}

export default CodingTypewriter
