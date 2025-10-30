import { Component } from '@angular/core';
import { NavBar } from "../../nav-bar/nav-bar";
import { Header } from "../header/header";
import { Footer } from "../../footer/footer";
import { FixedIcon } from "../../fixedIcon/fixed-icon/fixed-icon";
import { Headertwo } from "../headertwo/headertwo";
import { Headerthree } from "../headerthree/headerthree";
import { Contact } from "../contact/contact";
import { Service } from "../../service/service";
import { Courses } from "../../courses/courses/courses";
import { Free } from "../../free/free";
import { Free2 } from "../../free2/free2";

@Component({
  selector: 'app-main-home',
  imports: [NavBar, Header, Footer, FixedIcon, Headertwo, Headerthree, Contact, Service, Courses, Free, Free2],
  templateUrl: './main-home.html',
  styleUrl: './main-home.css'
})
export class MainHome {

}
