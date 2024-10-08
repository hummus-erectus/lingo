import "dotenv/config"
import { drizzle } from "drizzle-orm/neon-http"
import { neon } from "@neondatabase/serverless"

import * as schema from "@/db/schema"

import { eq } from "drizzle-orm"

const sql = neon(process.env.DATABASE_URL!)

const db = drizzle(sql, { schema })

const main = async () => {
  try {
    console.log("Seeding database for German Unit 1, Lesson 2")

    await db.delete(schema.lessons).where(eq(schema.lessons.id, 57))
    await db.delete(schema.challenges).where(eq(schema.challenges.lessonId, 57))

    // Insert Lesson
    await db.insert(schema.lessons).values({
      id: 57,
      unitId: 6, // German Unit 1, Lesson 2
      order: 2,
      title: "動詞 I",
    })

    // New words used in this lesson
    // gehen (to walk), laufen (to run), essen (to eat), trinken (to drink), schlafen (to sleep)

    await db.insert(schema.challenges).values([
      { id: 761, lessonId: 57, type: "SELECT", order: 1, question: 'これらの言葉の中で「歩く」を意味するのはどれ？' },
      { id: 762, lessonId: 57, type: "ASSIST", order: 2, question: '「歩く」' },
      { id: 763, lessonId: 57, type: "SELECT", order: 3, question: 'これらの言葉の中で「走る」を意味するのはどれ？' },
      { id: 764, lessonId: 57, type: "ASSIST", order: 4, question: '「走る」' },
      { id: 765, lessonId: 57, type: "SELECT", order: 5, question: 'これらの言葉の中で「食べる」を意味するのはどれ？' },
      { id: 766, lessonId: 57, type: "ASSIST", order: 6, question: '「食べる」' },
      { id: 767, lessonId: 57, type: "SELECT", order: 7, question: 'これらの言葉の中で「飲む」を意味するのはどれ？' },
      { id: 768, lessonId: 57, type: "ASSIST", order: 8, question: '「飲む」' },
      { id: 769, lessonId: 57, type: "SELECT", order: 9, question: 'これらの言葉の中で「眠る」を意味するのはどれ？' },
      { id: 770, lessonId: 57, type: "ASSIST", order: 10, question: '「眠る」' },
    ])

    await db.insert(schema.challengeOptions).values([
      // Question 1 - SELECT "歩く" (gehen)
      { challengeId: 761, optionId: 256, correct: true }, // gehen
      { challengeId: 761, optionId: 257, correct: false }, // laufen
      { challengeId: 761, optionId: 258, correct: false }, // essen
      { challengeId: 761, optionId: 259, correct: false }, // trinken

      // Question 2 - ASSIST "歩く" (gehen)
      { challengeId: 762, optionId: 256, correct: true }, // gehen
      { challengeId: 762, optionId: 257, correct: false }, // laufen
      { challengeId: 762, optionId: 258, correct: false }, // essen
      { challengeId: 762, optionId: 259, correct: false }, // trinken

      // Question 3 - SELECT "走る" (laufen)
      { challengeId: 763, optionId: 257, correct: true }, // laufen
      { challengeId: 763, optionId: 256, correct: false }, // gehen
      { challengeId: 763, optionId: 258, correct: false }, // essen
      { challengeId: 763, optionId: 259, correct: false }, // trinken

      // Question 4 - ASSIST "走る" (laufen)
      { challengeId: 764, optionId: 257, correct: true }, // laufen
      { challengeId: 764, optionId: 256, correct: false }, // gehen
      { challengeId: 764, optionId: 258, correct: false }, // essen
      { challengeId: 764, optionId: 259, correct: false }, // trinken

      // Question 5 - SELECT "食べる" (essen)
      { challengeId: 765, optionId: 258, correct: true }, // essen
      { challengeId: 765, optionId: 256, correct: false }, // gehen
      { challengeId: 765, optionId: 257, correct: false }, // laufen
      { challengeId: 765, optionId: 259, correct: false }, // trinken

      // Question 6 - ASSIST "食べる" (essen)
      { challengeId: 766, optionId: 258, correct: true }, // essen
      { challengeId: 766, optionId: 256, correct: false }, // gehen
      { challengeId: 766, optionId: 257, correct: false }, // laufen
      { challengeId: 766, optionId: 259, correct: false }, // trinken

      // Question 7 - SELECT "飲む" (trinken)
      { challengeId: 767, optionId: 259, correct: true }, // trinken
      { challengeId: 767, optionId: 256, correct: false }, // gehen
      { challengeId: 767, optionId: 257, correct: false }, // laufen
      { challengeId: 767, optionId: 258, correct: false }, // essen

      // Question 8 - ASSIST "飲む" (trinken)
      { challengeId: 768, optionId: 259, correct: true }, // trinken
      { challengeId: 768, optionId: 256, correct: false }, // gehen
      { challengeId: 768, optionId: 257, correct: false }, // laufen
      { challengeId: 768, optionId: 258, correct: false }, // essen

      // Question 9 - SELECT "眠る" (schlafen)
      { challengeId: 769, optionId: 260, correct: true }, // schlafen
      { challengeId: 769, optionId: 256, correct: false }, // gehen
      { challengeId: 769, optionId: 257, correct: false }, // laufen
      { challengeId: 769, optionId: 258, correct: false }, // essen

      // Question 10 - ASSIST "眠る" (schlafen)
      { challengeId: 770, optionId: 260, correct: true }, // schlafen
      { challengeId: 770, optionId: 256, correct: false }, // gehen
      { challengeId: 770, optionId: 257, correct: false }, // laufen
      { challengeId: 770, optionId: 258, correct: false }, // essen
    ])

    console.log("Seed data inserted successfully for German Unit 1, Lesson 2!")
  } catch (error) {
    console.error("Error inserting seed data:", error)
  }
}

main()
