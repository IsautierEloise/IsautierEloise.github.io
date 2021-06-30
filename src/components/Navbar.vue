<template>
    <div class="bottom-nav">
        <ul>
            <li><router-link to="/cache/discover">Discover</router-link></li>
            <li><router-link to="/cache/browse">Browse</router-link></li>
            <li><router-link to="/cache/favorites">Favourites</router-link></li>
            <li><router-link to="/cache/more">More</router-link></li>
        </ul>
    </div>   
</template>

<script>

export default {
  name: 'Navbar',
}
</script>
