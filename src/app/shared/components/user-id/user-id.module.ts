import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserIdComponent } from './user-id.component'

@NgModule({
  declarations: [UserIdComponent],
  imports: [CommonModule],
  exports: [UserIdComponent]
})
export class UserIdModule {}
