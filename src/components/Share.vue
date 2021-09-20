<template>
  <div>
    <ShareNetwork
      network="pinterest"
      :url="url"
      :title="titulo"
      :description="descripcion"
      :media="imagen"
    >
      <font-awesome :icon="['fab', 'pinterest']" />
    </ShareNetwork>

    <ShareNetwork
      network="whatsapp"
      :url="url"
      :title="titulo"
      :description="descripcion"
    >
      <font-awesome :icon="['fab', 'whatsapp']" />
    </ShareNetwork>

    <ShareNetwork
      network="telegram"
      :url="url"
      :title="titulo"
      :description="descripcion"
    >
      <font-awesome :icon="['fab', 'telegram']" />
    </ShareNetwork>

    <ShareNetwork
      network="twitter"
      :url="url"
      :title="titulo"
      :description="descripcion"
      twitter-user="novanetstudio"
    >
      <font-awesome :icon="['fab', 'twitter']" />
    </ShareNetwork>

    <ShareNetwork
      network="facebook"
      :url="url"
      :title="titulo"
      :description="descripcion"
    >
      <font-awesome :icon="['fab', 'facebook']" />
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    titulo: String,
    descripcion: String,
    imagen: String,
  },
}
import '../layouts/Home.scss'
</script>
