# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_12_02_204305) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bathrooms", force: :cascade do |t|
    t.string "location"
    t.text "description"
    t.boolean "public"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.date "date"
    t.text "description"
    t.text "cleanliness"
    t.integer "cleanliness_rating"
    t.text "function"
    t.integer "function_rating"
    t.text "style"
    t.integer "style_rating"
    t.bigint "user_id", null: false
    t.bigint "bathroom_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["bathroom_id"], name: "index_reviews_on_bathroom_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "reviews", "bathrooms"
  add_foreign_key "reviews", "users"
end
