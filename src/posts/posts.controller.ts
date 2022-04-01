import {
  Controller,
  Body,
  Param,
  Get,
  Post,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import JwtAuthenticationGuard from 'src/authentication/jwt-authentication.guard';
import { FindOneParams } from 'src/utils/findOneParams';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import PostsService from './posts.service';

@Controller('posts')
export default class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getAllPosts() {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  getPostById(@Param() { id }: FindOneParams) {
    return this.postsService.getPostById(Number(id));
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async createPost(@Body() post: CreatePostDto) {
    return this.postsService.createPost(post);
  }

  @Put(':id')
  async replacePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postsService.updatePost(Number(id), post);
  }

  // TODO:
  // Create function to remove post, and publish again.

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    this.postsService.deletePost(Number(id));
  }
}
