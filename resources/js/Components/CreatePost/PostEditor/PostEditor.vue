<template>
  <!--  <div class="PostEditor">-->
  <!--    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">-->
  <!--      <div class="menubar__container">-->
  <!--        <div class="menubar">-->
  <!--          <span-->
  <!--            class="menubar"-->
  <!--            :class="{ 'is-active': isActive.bold() }"-->
  <!--            @click="commands.bold"-->
  <!--            ><i class="bi bi-type-bold"></i-->
  <!--          ></span>-->
  <!--          <span-->
  <!--            class="menubar"-->
  <!--            :class="{ 'is-active': isActive.italic() }"-->
  <!--            @click="commands.italic"-->
  <!--            ><i class="bi bi-type-italic"></i-->
  <!--          ></span>-->
  <!--          <span-->
  <!--            class="menubar"-->
  <!--            :class="{ 'is-active': isActive.strike() }"-->
  <!--            @click="commands.strike"-->
  <!--            ><i class="bi bi-type-strikethrough"></i-->
  <!--          ></span>-->
  <!--          <span-->
  <!--            class="menubar"-->
  <!--            :class="{ 'is-active': isActive.underline() }"-->
  <!--            @click="commands.underline"-->
  <!--            ><i class="bi bi-type-underline"></i-->
  <!--          ></span>-->

  <!--          <span-->
  <!--            class="menubar"-->
  <!--            :class="{ 'is-active': isActive.code() }"-->
  <!--            @click="commands.code"-->
  <!--            ><i class="bi bi-code"></i-->
  <!--          ></span>-->

  <!--          <span-->
  <!--            class="menubar"-->
  <!--            :class="{ 'is-active': isActive.heading({ levels: 1 }) }"-->
  <!--            @click="commands.heading({ levels: 1 })"-->
  <!--          >-->
  <!--            H-->
  <!--          </span>-->
  <!--          <span-->
  <!--            class="menubar"-->
  <!--            :class="{ 'is-active': isActive.code_block() }"-->
  <!--            @click="commands.code_block"-->
  <!--          >-->
  <!--            <i class="bi bi-code-square"></i>-->
  <!--          </span>-->
  <!--          <span-->
  <!--            class="menubar"-->
  <!--            :class="{ 'is-active': isActive.link() }"-->
  <!--            @click="commands.link"-->
  <!--          >-->
  <!--            <i class="bi bi-link"></i>-->
  <!--          </span>-->
  <!--          <span-->
  <!--            class="menubar"-->
  <!--            :class="{ 'is-active': isActive.image() }"-->
  <!--            @click="commands.image"-->
  <!--          >-->
  <!--            <i class="bi bi-image"></i>-->
  <!--          </span>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </editor-menu-bar>-->
  <!--    <div class="editor_content">-->
  <!--      <editor-content class="form-control" type="paragraph" :editor="editor" />-->
  <!--    </div>-->
  <!--  </div>-->

  <h1>Post Editor</h1>
</template>

<script src="./_PostEditor.js" lang="js"></script>

<style src="./_PostEditor.scss" scoped lang="scss"></style>
