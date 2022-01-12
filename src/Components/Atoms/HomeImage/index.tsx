import './style.scss';


const HomeImage = () => (
    <div className="imageContainer">
        <div id="devClass">
            <p className="classHeader">Class: Developer</p>
            <div>
                <p>protected string $name</p>
                <p>protected int $age</p>
                <p>protected array $pets</p>
                <p>protected string favouriteProgrammingLanguage</p>
                <p>protected int $caffeinated</p>
            </div>
            <div>
                <p>public getters: string | int | array</p>
                <p>public setters: void</p>
                <p>public drinkCoffee(Coffee Machine $coffeeMachine): string</p>
                <p>public petPuppy(Dog $nova): string</p>
                <p>public writeCode(): string</p>
                <p>public screamInRage(): string</p>
            </div>
        </div>
        <div id="dogClass">
            <p className="classHeader">Class: Dog</p>
            <div>
                <p>protected string $name</p>
                <p>protected string $age</p>
                <p>protected string $colour</p>
                <p>protected Developer $owner</p>
            </div>
            <div>
                <p>public getters: string | Developer</p>
                <p>public setters: void</p>
                <p>public showBelly(): string</p>
                <p>public giveKisses(): string</p>
                <p>public chaseLeaves(): string</p>
                <p>public receivePets(): void</p>
            </div>
        </div>
    </div>
)

export default HomeImage