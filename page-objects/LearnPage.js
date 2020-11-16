import {Selector, t } from 'testcafe'

class LearnPage{
    constructor() {
        this.learnComputerScienceCard = Selector("[data-testid='computer-science_card']")
        this.computerScienceCard = Selector("[data-testid='computer-science_card_text']")
        this.learnGrid = Selector("[data-testid='grid']")
        
        this.csImageCard = Selector("[data-testid='computer_subject.svg']")
        this.statsImageCard = Selector("[data-testid='icon-subject-statistics-copy.svg']")
        this.physicsImageCard = Selector("[data-testid='physics_subject.svg']")
        this.econImageCard = Selector("[data-testid='economics_subject.svg']")
        this.chemImageCard = Selector("[data-testid='chemistry_subject.svg']")
        this.accountingImageCard = Selector("[data-testid='accounting_subject.svg']")
    }

    async verifySubjectGrid(array){
        for (let i = 0; i < array.length; i++) {
            await t.expect(this.learnGrid.innerText).contains(array[i])
            console.log(array[i])
        }
    }
}

export default LearnPage