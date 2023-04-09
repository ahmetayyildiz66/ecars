<template>
  <footer class="container py-8 md:py-10">
    <div class="space-y-6 lg:w-[288px]">
      <IconLogo />
      <p class="text-sm">
        Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc.
        Ut tellus elementum sagittis vitae et leo duis.
      </p>
      <div class="flex space-x-6">
        <IconFacebook :width="20" fill="#767676" :height="20" :opacity="0.7" />
        <IconTwitter :width="20" fill="#767676" :height="20" :opacity="0.7" />
        <IconYoutube :width="20" fill="#767676" :height="20" :opacity="0.7" />
        <IconInstagram :width="20" fill="#767676" :height="20" :opacity="0.7" />
      </div>
    </div>

    <div class="py-6 text-gray-750">
      <h6 class="text-gray-950 font-semibold">Company</h6>
      <ul class="space-y-3 mt-4 text-sm">
        <li>About Us</li>
        <li>Blog</li>
        <li>FAQ</li>
      </ul>
    </div>

    <div class="text-gray-750">
      <h6 class="text-gray-950 font-semibold">Cars</h6>
      <ul class="space-y-3 mt-4 text-sm">
        <li>Special offers</li>
        <li>New cars</li>
        <li>Used cars</li>
        <li>Brands</li>
      </ul>
    </div>

    <div class="text-gray-750 mt-6">
      <h6 class="text-gray-950 font-semibold">Contacts</h6>
      <ul class="space-y-3 mt-4 text-sm">
        <li class="flex items-center space-x-2">
          <IconWhatsapp :height="20" :width="20" fill="#767676" />
          <span>+971 55 811 9024</span>
        </li>

        <li class="flex items-center space-x-2">
          <IconMail :height="20" :width="20" fill="#767676" />
          <span>request@example.com</span>
        </li>
      </ul>
    </div>

    <div class="mt-6 text-xs text-gray-550 space-y-4">
      <p>eCars © 2022. All right reserved.</p>
      <p class="space-x-4">
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
      </p>
    </div>

  </footer>
</template>

<script lang="ts" setup>
import IconLogo from "../components/icons/IconLogo.vue";
import IconFacebook from "../components/icons/IconFacebook.vue";
import IconTwitter from "../components/icons/IconTwitter.vue";
import IconYoutube from "../components/icons/IconYoutube.vue";
import IconInstagram from "../components/icons/IconInstagram.vue";
import IconWhatsapp from "../components/icons/IconWhatsapp.vue";
import IconMail from "../components/icons/IconMail.vue";
</script>
