import { Selector } from 'testcafe';
import LearnPage from '../page-objects/LearnPage.js'

const learnPage = new LearnPage()

fixture `Simple tests for learn page subject cards.`
    .page `https://www.chegg.com/learn`;

    const heroTitle =  Selector("[data-testid='subject_hero_title']")

test('learn subject cards', async t => {

    // checks that learn cards have correct text 
    var subjects = ["Computer Science", "Statistics", "Physics", "Economics", "Chemistry", "Accounting" ];
    await learnPage.verifySubjectGrid(subjects)
    // await t.expect(learnPage.learnGrid.innerText).contains('Computer Science')
    // await t.expect(learnPage.learnGrid.innerText).contains('Statistics')
    // await t.expect(learnPage.learnGrid.innerText).contains('Physics')
    // await t.expect(learnPage.learnGrid.innerText).contains('Economics')
    // await t.expect(learnPage.learnGrid.innerText).contains('Chemistry')
    // await t.expect(learnPage.learnGrid.innerText).contains('Accounting')

    // checks learn cards to see that image exisis 
    await t.expect((learnPage.csImageCard).exists).ok() 
    await t.expect((learnPage.statsImageCard).exists).ok() 
    await t.expect((learnPage.physicsImageCard).exists).ok() 
    await t.expect((learnPage.econImageCard).exists).ok() 
    await t.expect((learnPage.chemImageCard).exists).ok() 
    await t.expect((learnPage.accountingImageCard).exists).ok() 

    // checks that if you click on the computer science card you will see the title Computer Science when the page loads
    await t.click(learnPage.learnComputerScienceCard)
    await t.expect(heroTitle.innerText).contains('Computer Science')
        
});
