import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FilesGeneratorService, IFileData } from "../../services/files.service";
import { UsersService } from "../../services/user.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(public filesGeneratorService: FilesGeneratorService, public userService: UsersService,  public router: Router) {}
  
  goToProfile() {
    const userId = this.userService.getUserIdFromToken();
    this.router.navigateByUrl(`/profile/${userId}`);
  }

  generarFile(type: string){
    
    this.filesGeneratorService.getFileData(type).subscribe( 
    (response: IFileData) =>{    
      const file = new Blob([response.data], { type: "text/plain"});
      const link = document.createElement("a");
      link.href = URL.createObjectURL(file);
      link.download = response.file_name;
      link.click();
      link.remove();
    },
    (error:any) => {
      console.log(error);
    }

    );
  }
}
