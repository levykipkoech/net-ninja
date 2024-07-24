import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

@Controller("ninjas")
export class NinjasController {
  //get ninjas
  @Get()
  getNinjas() {
    return [];
  }
  //get ninjas"id"
  @Get(":id")
  getOneNinja() {
    return {};
  }
  //posti ninja
  @Post()
  createNinja() {
    return {};
  }
  //updating the ninja "id"
  @Put(":id")
  updateNinja() {
    return {};
  }
  @Delete(":id")
  deleteNinj() {
    return {};
  }
}
