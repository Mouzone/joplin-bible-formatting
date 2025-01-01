import joplin from 'api'
import { ToolbarButtonLocation } from 'api/types'

joplin.plugins.register({
	onStart: async function() {
        await joplin.commands.register({
            name: "transformBibleChapter",
            label: "Transform Bible Chapter",
            iconName: "fas fa-bible",
            execute: async () => {
                const note = await joplin.workspace.selectedNote()
                if (note) {
                    console.log(`Modifying note: ${note.id}`)
                    const newNoteBody = transformNote(note["body"])
                    await joplin.commands.execute("textSelectAll")
                    await joplin.commands.execute("replaceSelection", newNoteBody)
                }
            }
        })
        await joplin.views.toolbarButtons.create(
            'button', 
            'transformBibleChapter', 
            ToolbarButtonLocation.EditorToolbar)
    }
})

// enclose every number inside <sup>**{x}**</sup>, but skip the first number since that would be chapter number
function transformNote(noteBody: string) {
    // const newNote = []
    // let readingInteger = false
    
    // for (const char of noteBody) {
    //     const isNotInt = isNaN(parseInt(char))
    //     if (!readingInteger && isNotInt){
    //         newNote.push("**</sup>")
    //         readingInteger = true
    //     } 

    //     if (readingInteger && !isNotInt){
    //         newNote.push("<sup>**")
    //         readingInteger = false
    //     }

    //     newNote.push(char)
    // }
    // return newNote.join("")
    
    let firstMatchSkipped = false;
    noteBody = noteBody
        .replace(/(\d+)/g, (match) => {
            if (!firstMatchSkipped) {
                firstMatchSkipped = true
                return `**${match}**`
            }
            return `<sup>**${match}**</sup>`; // Replace subsequent matches
        })
        .replace(/\[[a-zA-Z]\]/g, "") // Remove all bracketted footnotes

    return noteBody
}