'use client'
import {
  UserProfile,
} from '@clerk/nextjs'

export default function Page() {

  return (
    <div className="w-full flex justify-center py-12">
      <UserProfile />
    </div>
  )
}
