import { Selector } from 'testcafe';


fixture `Simple tests for learn page subject cards.`
    .page `https://www.chegg.com/learn/computer-science/computer-software/nested-selection#nested-if-statement`;

    const nestedSelectionLink =  Selector("[data-testid='nested-selection-definition']")
    const nestedLinks = Selector("[data-testid='nested-selection-definition']") 
    const overViewLinks = Selector("[data-testid='overview-of-nested-selection']") 
     
    test('links', async t => {
        // await t.click(nestedSelectionLink)


        async function clickingLinks(linkName){
                await t.click(linkName)
                
            }
        
        await clickingLinks(nestedLinks)

});