import { Component } from "@angular/core";
import { Note } from "../note";
import { NotesService } from "../services/notes.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent {
  errMessage: string;
  note: Note = new Note();
  notes: Array<Note>;

  constructor(private noteService: NotesService) {}

  handleDoneBtnClicked = () => {
    console.log(this.note);

    if (this.note.title && this.note.text) {
      this.noteService.addNote(this.note).subscribe(
        (res) => {
          console.log(res);
          this.notes.push(this.note);
        },
        (err) => {
          console.error(err);
          this.errMessage =
            "Http failure response for http://localhost:3000/notes: 404 Not Found";
        }
      );
    } else {
      this.errMessage = "Title and Text both are required fields";
    }
  };

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(
      (res) => {
        console.log(res);
        this.notes = res;
      },
      (err) => {
        console.error(err);
        this.errMessage =
          "Http failure response for http://localhost:3000/notes: 404 Not Found";
      }
    );
  }
}
