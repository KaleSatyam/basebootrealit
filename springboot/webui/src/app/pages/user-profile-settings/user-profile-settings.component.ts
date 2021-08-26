import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile, UserProfileService } from 'src/app/services/api/user-profile.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertService } from 'src/app/services/alert.service';
@Component({
  selector: 'app-user-profile-settings',
  templateUrl: './user-profile-settings.component.html',
  styleUrls: ['./user-profile-settings.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UserProfileSettingsComponent implements OnInit {
  updated = false;
  userProfile: UserProfile;



  roles = ['user', 'admin', 'mis report', 'bi report'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userProfileService: UserProfileService,
    private http: HttpClient,
    private alertService: AlertService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.getUserProfile();
    this.getProfilePic();
    /* this.id = this.route.snapshot.params["id"];
    console.log("update with id = ", this.id);
    this.getById(this.id); */
   
  }



  /* getById(id: number) {
    this.menuGroupService.getById(id).subscribe((data) => {
      this.rn_menu_group_header = data;
      this.rn_menu_group_line = data.menu_group_lines;
    });
  } */

  getUserProfile() {
    this.userProfileService.getUserProfile().subscribe(res => {
      console.log(res);
      this.userProfile = res;
    })
  }

  update() {
    this.userProfileService.updateUserProfile(this.userProfile).subscribe(
      (resp) => {
        console.log(resp);
        //this.router.navigate(["../../all"], { relativeTo: this.route });
      },
      (error) => {
        console.log(error);
      }
    );
    //this.picUpload();
  }

  public profilePic: File = null;
  onSelectFile(event) {
    let flag = 0;
    const mimeType = event.target.files[0].type;
    if(mimeType.match(/image\/*/) === null ){
      this.message = 'Only Image Type Is Supported';
      flag = flag + 1;
      return;
    }
    const size = event.target.files[0].size;
    if(size > 5000000) {
      flag = flag + 1;
      this.message = 'Plese Select image file under 2 MB';
      return;
    }
    console.log('flag value = ', flag);
    if(flag === 0) {
      this.profilePic = <File> event.target.files[0];
      console.log(this.profilePic);
      const reader = new FileReader();
      this.image = this.profilePic;
      reader.readAsDataURL(this.profilePic);
      reader.onload = (_event) => { 
      this.image = reader.result;
      }
      this.picUpload();
    }

  }

  message: string;
  picUpload() {
    this.userProfileService.uploadUserProfilePic(this.profilePic).subscribe(res => {
      console.log(res);
      if(res.type === HttpEventType.UploadProgress){
        console.log('Upload Progress : ', + Math.round(res.loaded / res.total * 100) + '%');
      } else if(res.type === HttpEventType.Response) {
        if (res.status === 200) {
          this.alertService.success('Image uploaded successfully');
          //this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded';
        }
      }
    }, err => {console.log(err);
    });
  }
  image: any;
  getProfilePic() {
    this.userProfileService.getProfilePic().subscribe(res => {
      console.log(res);
      this.image = this._sanitizer.bypassSecurityTrustResourceUrl(res.image);
    }, err => {console.log(err);}
    );
  }
  
  /*picUpload() {
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.profilePic, this.profilePic.name);
    this.http.post('http://localhost:9119/api/upload', uploadImageData, { observe: 'response' })
      .subscribe((res) => {
        console.log(res);
        if (res.status === 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      ); 
  }*/


  onSubmit() {
    this.updated = true;
    this.update();
  }
  

}
