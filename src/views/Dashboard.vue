<template>
<div class="dashboard-wrap">
  <div class="dashboard">
    
    <!-- dashboard header -->
    <div class="dash-header">
      <h2>Dashboard</h2>

      <div class="dash-details">
        <fa-icon :icon="['fas', 'envelope']" class="bio-icon"/>

        <fa-icon :icon="['fas', 'bell']" class="bio-icon" />

        <div class="user-bio">
          <div class="user-dp">
            <fa-icon :icon="['far', 'user']" class="" />
          </div>

          <div class="title-role">
            <h3>Macgyver</h3>
            <p>Admin Account</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Dashboard'

}
</script>

<style lang="scss" scoped>
.dashboard-wrap {
  @apply flex-1 ;

  .dashboard {
    @apply mx-auto;

    .dash-header {
      @apply flex flex-row gap-4 justify-between items-center px-10 bg-white border-b-2 border-[#EAEBEB] h-[90px];

      h2{
        @apply text-lg font-bold text-[#15202C];
      }

      .dash-details {
        @apply flex flex-row gap-4 items-center content-center;

        .bio-icon {
          @apply w-9 h-7 text-[#E3E3E3]
        }

        .user-bio {
          @apply flex flex-row gap-3 justify-center items-center;

          .user-dp {
            @apply relative cursor-pointer flex items-center justify-center w-9 h-9 bg-[#104438] p-3 text-[#E3E3E3];
            border-radius: 50%;
          }

          .title-role {
            @apply flex flex-col gap-0 items-start text-start content-center justify-center ml-1;

            h3{
              @apply text-[#404040] font-semibold text-base
            }

            p{
              @apply text-[#AEAEAE] text-sm font-normal;
            }
          }

        }
      }
    }
  }
}
</style>